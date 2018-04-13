require('isomorphic-fetch')
const { GraphQLServer } = require('graphql-yoga')
const { ObjectScalarType } = require('./lib')
const { SmartHomeManager, Devices, PatternList} = require
('smarthome-manager')
const { Client } = require('node-ssdp')

const typeDefs = `

scalar ObjectScalarType

input HueState {
  on: Boolean, 
  sat: Int, 
  bri: Int,
  hue: Int
} 

type Query {
  supportedDevices: ObjectScalarType
  getHues: ObjectScalarType
  getMagicHomeState: ObjectScalarType
}
type Mutation {
  toggleHueState(id: Int!, state: HueState): ObjectScalarType
  generateUser(deviceType: String!): ObjectScalarType
  wemoConnect(deviceId: String): ObjectScalarType
  setBinaryState(state: String): ObjectScalarType
  toggleMagicHomeState(state: Boolean): ObjectScalarType
  setMagicHomeColorWithBrightness(red: Int, green: Int, blue: Int, brightness: Int): ObjectScalarType
  magicHomeItsPartyTime: ObjectScalarType
}
`

const resolvers = {
  Query: {
    supportedDevices: () => {
      return manager.deviceList
    },
    getHues: async () => {
      const result = await manager.controllers.philipsHueController.getHueState()
      return result
    },
    getMagicHomeState: async () => {
      return await manager.controllers.magicHomeController.queryState()
    }
  },
  Mutation: {
    async toggleHueState(_, { id, state }) {
      return await manager
                    .controllers
                    .philipsHueController
                    .toggleHueState(id, state)
    },
    async generateUser(_, { deviceType }) {
      return await manager
                    .controllers
                    .philipsHueController
                    .generateUser(deviceType)
    },
    async wemoConnect(_, { deviceId }){
      return await manager
        .controllers
        .wemoController.connect()
    },
    async setBinaryState(_, { state }) {
      return await manager
        .controllers
        .wemoController.setBinaryState(state)
    },
    async toggleMagicHomeState(_, { state }) {
      return state 
      ? await manager
        .controllers
        .magicHomeController.turnOn() 
      : await manager
        .controllers
        .magicHomeController.turnOff()
    },
    async setMagicHomeColorWithBrightness(_, { red, green, blue, brightness }) {
      return await manager.controllers.magicHomeController.setColorWithBrightness(red, green, blue, brightness)
    },
    async magicHomeItsPartyTime(){
      const wemo = await manager.controllers.wemoController.setBinaryState(1)
      const philips = await manager.controllers.philipsHueController.toggleHueState(5, { on: true })
      const magicHome = await manager.controllers.magicHomeController.setPattern(PatternList.seven_color_jumping, 100)

    }
  }
}

const manager = new SmartHomeManager([{
  type: Devices.philipsHue,
  options: {
    userName: "n3fnnJQzwEqeFtJ1J4cRIo1O98bztFp5R8TT109y"
  }
}, {
  type: Devices.wemo,
}, {
  type: Devices.magicHome,
  options: {
    ip: "192.168.0.101"
  }
}],{
  onReady: (state, controllers) => {
    console.log("GraphQL Bridge is Ready")
  },
  autoDiscovery: true,
  SSDPClient: Client
})

const server = new GraphQLServer({
  typeDefs,
  resolvers
})


server.start(() => console.log(`The server is running on http://localhost:4000`))
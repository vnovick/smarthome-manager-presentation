import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { View, Text } from 'react-native'
import { Switch } from 'react-native-paper'
import {
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Button,
  Paragraph
} from 'react-native-paper';

export class WemoComponent extends React.Component {

  render(){
    return (
      <View style={{flex:1 , justifyContent: 'center' }}>
        <Mutation
          mutation={gql`
              mutation {
                wemoConnect
              }
          `}
        >
          {(connect, progress) => {
            return <WemoSwitchView connect={connect} progress={progress}/>
          }}
        </Mutation>
      </View>
    )
  }
}

class WemoSwitchView extends React.Component {

  state = {
    isSwitchOn: false,
  }

  componentDidMount(){
    this.props.connect()
  }

  render(){
    const { isSwitchOn } = this.state;
    return (
      <Mutation mutation={
        gql`
          mutation setState($state: String){
            setBinaryState(state: $state)
          }
        `
      }>
        {(setBinaryState, { }) => {
          return (
            <Card>
              <CardContent>
                <Title>Wemo Mini Plug</Title>
                <Paragraph>
                The Wemo Mini Smart Plug lets you control your electronic devices right from your phone or tablet. The Smart Plug uses your existing home Wi-Fi network to provide wireless control of lamps, heaters, fans, and more--with no subscription or hub required. Simply plug the Wemo Mini Smart Plug into an electrical outlet, plug a device into the Smart Plug, and control your device using the free Wemo app. Whether you’re unwinding on the couch or vacationing in the Caribbean, you’ll be able to remotely control your lights and appliances from anywhere in the world.
                </Paragraph>
              </CardContent>
              <CardCover source={{ uri: 'https://i.ytimg.com/vi/r6_jNexTbBs/maxresdefault.jpg' }} />
              <CardActions style={{alignSelf: 'flex-end'}}>
                <Switch
                  value={isSwitchOn}
                  onValueChange={() => { 
                      this.setState({ isSwitchOn: !isSwitchOn }); 
                      setBinaryState({ variables: { state: (+!isSwitchOn).toString()} })
                    }
                  }
                />
                <Button>Turn {this.state.isSwitchOn ? 'off': 'on'}</Button>
              </CardActions>
            </Card>
          )
        }}
      </Mutation>
    )
  }
}
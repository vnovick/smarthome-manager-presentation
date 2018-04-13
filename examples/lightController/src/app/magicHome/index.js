import React, { Fragment } from 'react';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { ScrollView, Text, ActivityIndicator, View, ImageBackground } from 'react-native'
import { ColorPicker } from 'react-native-color-picker'
import { rgbToHex, hexToRgb } from '../../lib/utils'
import {
  Button,
  Switch,
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Paragraph
} from 'react-native-paper';


export class MagicHomeComponent extends React.Component {
  render(){
    return (
      <View style={{flex: 1 }}>
        <Query
          query={gql`
            {
              getMagicHomeState
            }
          `}
        >
          {({ loading, error, data: { getMagicHomeState: state } }) => {
            if(loading) return <ActivityIndicator/>
            if(error) return <Text>Error :(</Text>
            return (
              <Fragment>
                <Card>
                  <CardContent>
                    <Title>Magic Home Led strip</Title>
                    <Paragraph style={{fontSize: 22, lineHeight: 22}}>
                      { JSON.stringify(state, 2)}
                    </Paragraph>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
                <Card>
                  <CardContent>
                    <Title>Control colors</Title>
                    <ControlledCollorPicker color={state.color}/>
                  </CardContent>
                  <CardActions style={{justifyContent: 'space-between', paddingVertical: 20 }}>
                    <BasicController on={state.on}/>
                    <PartyButtonComponent />
                  </CardActions>
                </Card>
              </Fragment>
            )
          }}
        </Query>
      </View>
    )
  }
}





class BasicController extends React.Component {
  
  componentDidMount(){
    this.setState({
      isSwitchOn: this.props.on
    })
  }
  
  state = {
    isSwitchOn: false,
  }

  render(){
    const { isSwitchOn } = this.state
    return (
      <Mutation mutation={gql`
      mutation toggleMagicHomeState($state: Boolean){
          toggleMagicHomeState(state: $state)
        }
        `}>
        {(toggle, ) => (
          <Switch
              value={isSwitchOn}
              onValueChange={() => { 
                this.setState({ isSwitchOn: !isSwitchOn }); 
                  toggle({ variables: { state: !isSwitchOn} })
                }
              }
            />
          )}
      </Mutation>
    )
  }
}


class ControlledCollorPicker extends React.Component {
                                    
  state = {
    color: false,
    brightness: 0
  }
  componentDidMount() {
    const { red, green, blue } = this.props.color
    this.setState({
      color: `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`
    })
    console.log(`${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`)
  }

  render(){
    return (
      this.state.color && (
        <Mutation mutation={
          gql`
            mutation setColorWithBrightness($red: Int, $green: Int, $blue: Int, $brightness: Int){
              setMagicHomeColorWithBrightness(red: $red, green: $green, blue: $blue, brightness: $brightness)
            }
          `
        }>
          {(setColorWithBrightness) => (
            <ImageBackground source={{uri: "https://images-eu.ssl-images-amazon.com/images/I/5180CX5dimL._SL500_AC_SS350_.jpg"}} style={{width: '100%'}}>
              <View style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                <ColorPicker 
                  defaultColor={this.state.color}
                  style={{
                    height: 300,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 5
                  }}
                  onColorSelected = {(color) => {
                    this.setState({
                      color
                    })
                    console.log( {
                      ...hexToRgb(color),
                      brightness: 100
                    })
                    setColorWithBrightness({ variables: {
                      ...hexToRgb(color),
                      brightness: 100
                    }})
                  }}
                />
              </View>
            </ImageBackground>
          )}
        </Mutation>
      )
    )
  }
}

const PartyButtonComponent = () => (
  <Mutation mutation={gql`
    mutation {
      magicHomeItsPartyTime
    }
  `}>
    {(party) => (
      <Button icon="cake" raised onPress={() => {
        party()
      }}>
        Let's Party
      </Button>
    )}
  </Mutation>
)
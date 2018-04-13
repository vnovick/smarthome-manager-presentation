import React, { Fragment } from 'react';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { View,ScrollView, Text, StyleSheet } from 'react-native'
import { ColorPicker } from 'react-native-color-picker'
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

import { cie_to_rgb, rgb_to_cia, rgbToHex } from '../../lib/utils'


export class HueComponent extends React.Component {
  render(){
    return (
      <ScrollView>
        <Query
          query={gql`
            {
              getHues
            }
          `}
        >
          {({ loading, error, data: { getHues } }) => {
            if(loading) return <Text>Loading...</Text>
            if(error) return <Text>Error :(</Text>
            return (
              <Fragment>
                { 
                  Object.keys(getHues).map(groupType => (
                    <Card>
                      <CardContent>
                        <Title>Philips Hue{ groupType } group</Title>
                        <Fragment>
                          { Object.values(getHues[groupType]).map((device, index) => {
                              if(groupType !== "lights") return (
                                <Paragraph key={`${device.name}-${index}`}>
                                  { JSON.stringify(device, null, 2) }
                                </Paragraph>
                              )
                              return <BulbController data={device}/>
                            })
                          }
                        </Fragment>
                      </CardContent>
                      <CardActions>
                      </CardActions>
                    </Card>
                  ))
                }
              </Fragment>
            )
          }}
        </Query>
      </ScrollView>
    )
  }
}

class BulbController extends React.Component {
  render() {
    return (
      <Card>
        <CardContent style={this.props.data.state.reachable ? style.reachable : style.disabled}>
          <Title>{this.props.data.name}</Title>
          <CardActions>
            <ActiveToggleButton { ...this.props.data } />
          </CardActions>
        </CardContent>
      </Card>
    )
  }
}


class ActiveToggleButton extends React.Component {

  componentDidMount(){
    this.setState({
      isSwitchOn: this.props.state.on
    })
  }
  
  state = {
    isSwitchOn: false,
  }

  render(){
    const { isSwitchOn } = this.state
    return (
      <Mutation mutation={gql`
        mutation toggleHueState($id: Int!, $state: HueState){
          toggleHueState(id: $id, state: $state)
        }
          `}>
        {(toggle, ) => (
          <Switch
              value={isSwitchOn}
              onValueChange={() => { 
                this.setState({ isSwitchOn: !isSwitchOn }); 
                    toggle({ variables: { id: 5, state: { on: !isSwitchOn }} })
                }
              }
            />
          )}
      </Mutation>
    )
  }
}

const style = StyleSheet.create({
  colorPicker: {
    height: 300,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  reachable: {
    borderColor: 'green',
    borderWidth: 1
  },
  disabled: {
    borderColor: 'red',
    borderWidth: 1
  }
})
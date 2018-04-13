import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { HueComponent } from './hue'
import { WemoComponent } from './wemo'
import { MagicHomeComponent } from './magicHome'

console.disableYellowBox = true

export class RootComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'hue', title: 'Hue', icon: 'device-hub' },
      { key: 'wemo', title: 'Wemo', icon: 'power-input' },
      { key: 'magicHome', title: 'Magic Home', icon: 'lightbulb-outline' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    hue: HueComponent,
    wemo: WemoComponent,
    magicHome: MagicHomeComponent,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
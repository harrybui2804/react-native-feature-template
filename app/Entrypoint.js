import React, {Component} from 'react';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import store from './store';
import {NativeModules, StatusBar, YellowBox} from 'react-native';
import AppColors from './config/colors';
import SplashScreen from 'react-native-splash-screen';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

YellowBox.ignoreWarnings([
  'Warning:',
  'Remote debugger is in a background tab',
]);

export default class Entrypoint extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={AppColors.white}
        />
        <Navigator />
      </Provider>
    );
  }
}

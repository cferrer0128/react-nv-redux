const React = require('react');
import ReactNative, { AppRegistry, Text } from 'react-native';
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import App from './app';
const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


// register the app
AppRegistry.registerComponent('RNWeb', () => ReduxApp);

AppRegistry.runApplication('RNWeb', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
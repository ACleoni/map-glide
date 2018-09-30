import { createStackNavigator } from 'react-navigation';
import { HomeScreen, MapScreen }  from './src/screens';

export default App = createStackNavigator({
  Home: {screen: HomeScreen},
  Map: {screen: MapScreen}
});

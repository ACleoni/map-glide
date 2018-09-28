import { HomeScreen } from './src/screens';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  Home: {Screen: HomeScreen}
})

export default App

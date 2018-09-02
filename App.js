import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';

const App = createStackNavigator({
	home: Home
});

export default App;
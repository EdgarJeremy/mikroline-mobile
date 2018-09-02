import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Scan from './src/screens/Scan';

const App = createStackNavigator({
	home: Home,
	scan: Scan
});

export default App;
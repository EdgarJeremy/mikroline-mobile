import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Scan from './src/screens/Scan';
import Locator from './src/screens/Locator';

const App = createStackNavigator({
	home: Home,
	scan: Scan,
	locator: Locator
});

export default App;
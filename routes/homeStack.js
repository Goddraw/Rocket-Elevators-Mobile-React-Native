import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from react-navigation;
import { Home } from '../screens/home';
import { ElevatorStatus } from '../screens/elevatorStatus';

const screens = {
    Home: {
        screen: Home
    },
    ElevatorStatus: {
        screen: ElevatorStatus
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
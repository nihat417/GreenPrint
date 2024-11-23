import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabBarVisibilityContext,TabBarVisibilityProvider } from '../../../contexts/TabBarVisibilityContext';
import MainNavStructure from './mainNavStructure';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const MyHomeStack = () =>{
    return (
        <HomeStack.Navigator initialRouteName='HomePage'>
            <HomeStack.Screen options={{headerShown: false}} name="HomePage" component={Home}/>
        </HomeStack.Navigator>
    );
};


const MyProfileStack = () =>{
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen options={{headerShown:false}} name="ProfilePage" component={Profile}/>
        </ProfileStack.Navigator>
    )
};


const MainNavTab = () => {
    return(
        <TabBarVisibilityProvider>
            <TabBarVisibilityContext.Consumer>
                {({isTabBarVisible})=>(
                    <NavigationContainer>
                        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}
                        tabBar={props => isTabBarVisible ? <MainNavStructure {...props} /> : null}>
                            <Tab.Screen name="Home" component={MyHomeStack}/>
                            <Tab.Screen name="Profile" component={MyProfileStack}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                )}
            </TabBarVisibilityContext.Consumer>
        </TabBarVisibilityProvider>
    )
};

export default MainNavTab;
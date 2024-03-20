import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Planets from "../screens/Planets";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#161328',
          borderTopColor: 'transparent',
          height: 60,
          paddingBottom: 3,
        },

      }}>
      <Tab.Screen name="Home" component={Home} options={
        {
          tabBarLabel: 'Início'
        }
      
      } />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Planets" component={Planets} options={
        {
          tabBarIcon: ({ focused }) => (<Feather name="globe" size={24} color={focused ? "#4cc0c0" : "#605565"} />),
          tabBarLabel: 'Planetas',
          tabBarActiveTintColor: '#4cc0c0',
        tabBarInactiveTintColor: '#605565',
        }
      
      } />
    </Tab.Navigator>
  );
};

export default TabRoutes;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather';
import Home from "../screens/Home";
import Management from "../screens/PlanetManagement";
import Planets from "../screens/Planets";
import Planet from "../screens/Planet";

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
      <Tab.Screen name="Management" initialParams={{ planet: null, edit: false }} component={Management} options={
        {
          tabBarIcon: ({ focused }) => (<Feather name="plus-square" size={24} color={focused ? "#4cc0c0" : "#605565"} />),
          tabBarLabel: 'Gerenciador de Planetas',
          tabBarActiveTintColor: '#4cc0c0',
        tabBarInactiveTintColor: '#605565',
        }
      
      } />
      <Tab.Screen name="Planets" component={Planets} options={
        {
          tabBarIcon: ({ focused }) => (<Feather name="globe" size={24} color={focused ? "#4cc0c0" : "#605565"} />),
          tabBarLabel: 'Planetas',
          tabBarActiveTintColor: '#4cc0c0',
        tabBarInactiveTintColor: '#605565',
        }
      
      } />

      <Tab.Screen name="Planet" component={Planet} options={
        {
        tabBarItemStyle: {
          display: 'none',
        },
        }
      
      } />
    </Tab.Navigator>
  );
};

export default TabRoutes;
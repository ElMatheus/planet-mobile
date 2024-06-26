import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Planet from "../screens/Planet";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Planet" component={Planet} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
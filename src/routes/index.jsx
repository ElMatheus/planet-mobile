import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";




export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
      {/* <StackRoutes /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
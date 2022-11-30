import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "../screens/AuthScreen";
import MainNavigator from "./MainNavigator";

const AppNavigator = () => {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;

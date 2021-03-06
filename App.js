import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Navigations/Main";
import { useSelector } from "react-redux";
import Auth from "./Navigations/Auth";
import { loadUser } from "./Redux/Actions/UserActions";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { Text } from "react-native";
import Splash from "./src/components/Layout/Splash";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={Store}>
        <AppStack />
      </Provider>
    </SafeAreaView>
  );
};

const AppStack = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <NavigationContainer>
      <>{loading ? <Splash /> : <>{isAuthenticated ? <Main /> : <Auth />}</>}</>
    </NavigationContainer>
  );
};

export default App;

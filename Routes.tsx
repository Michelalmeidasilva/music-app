import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import { Home, Form, Search, Artist } from "src/screens";

import { theme } from "src/theme";

const ScreenOptions = () => ({
  cardStyle: {
    backgroundColor: theme.colors.background,
  },
  headerShown: false,
});

const Routes: FC = () => (
  <Navigator initialRouteName="Home" screenOptions={ScreenOptions}>
    <Screen name="Home" component={Home} />
    <Screen name="Form" component={Form} />
    <Screen name="Search" component={Search} />
    <Screen name="Artist" component={Artist} />
  </Navigator>
);

export default Routes;

import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import { PanicButton } from "./PanicButton";
import { GratitudeJournal } from "./GratitudeJournal";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#6366f1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "MoodPy" }}
            />
            <StackNavigator.Screen
                name="PanicButton"
                component={PanicButton}
                options={{ title: "Respira" }}
            />
            <StackNavigator.Screen
                name="GratitudeJournal"
                component={GratitudeJournal}
                options={{ title: "Diario" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
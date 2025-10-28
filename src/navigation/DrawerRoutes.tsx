import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./TabRoutes";
import CoursesScreen from "../screens/Courses/CoursesScreen";
import TasksScreen from "../screens/Tasks/TasksScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import AboutScreen from "../screens/About/AboutScreen";

import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="Tab"
            screenOptions={{ headerShown: false, drawerPosition: "right" }}
        >
            <Drawer.Screen
                name="Início"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="person-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Cursos"
                component={CoursesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="planet-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Atividades"
                component={TasksScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="rocket-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Configurações"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="settings-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Sobre"
                component={AboutScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="information-circle-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

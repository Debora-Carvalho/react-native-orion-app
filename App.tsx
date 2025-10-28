import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/navigation/StackRoutes";
// import TabRoutes from "./src/navigation/TabRoutes";
// import DrawerRoutes from "./src/navigation/DrawerRoutes";

export default function App() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
};



import * as React from "react";
import * as ReactNative from "react-native";

declare module "react-native-linear-gradient" {

    export interface LinearGradientProps extends ReactNative.ViewProps {
        colors: (string|number)[],
        start?: { x: number, y: number },
        end?: { x: number, y: number },
        locations?: number[]
    }

    export default class LinearGradient extends React.Component<LinearGradientProps, any> { }
}

import * as React from "react";
import * as ReactNative from "react-native";

declare module "react-native-linear-gradient" {

    export type LinearGradientProps = Exclude<ReactNative.ViewProperties, 'start' | 'end'> & {
        colors: (string|number)[],
        start?: { x: number, y: number },
        end?: { x: number, y: number },
        locations?: number[]
    }

    export class LinearGradient extends React.Component<LinearGradientProps, any> { }

    export default LinearGradient
}

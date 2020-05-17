# react-native-linear-gradient

[![Version](https://img.shields.io/npm/v/react-native-linear-gradient.svg)](https://www.npmjs.com/package/react-native-linear-gradient)
[![NPM](https://img.shields.io/npm/dm/react-native-linear-gradient.svg)](https://www.npmjs.com/package/react-native-linear-gradient)

A `<LinearGradient>` component for react-native, as seen in
[react-native-login](https://github.com/brentvatne/react-native-login).

## Installation

Using Yarn

```sh
yarn add react-native-linear-gradient
```

Using NPM

```sh
npm install react-native-linear-gradient --save
```

### With React Native >= 0.60

Run `pod install` inside your `ios/` folder.

## Linking (for React Native <= 0.59 only)

Note: If you are using react-native version 0.60 or higher you don't need to link [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient).

### Automatic

```sh
react-native link react-native-linear-gradient
```
Note: If you are using react-native version 0.60 or higher you don't need to link [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient).

#### iOS CocoaPods

Add the following line to your Podfile:

```sh
pod 'BVLinearGradient', :path => '../node_modules/react-native-linear-gradient'
```

Run `pod install` inside your `ios/` folder.

### Manual Linking

1. Open your project in Xcode
2. Right click on `Libraries` and click `Add Files to "Your Project Name"`. Look under `node_modules/react-native-linear-gradient/ios` and add `BVLinearGradient.xcodeproj`.  [(Screenshot 1)](https://drive.google.com/open?id=1ynspo3wZjCLav23teGwKtzh7pcXpeREO) [(Screenshot 2)](https://drive.google.com/open?id=1cXW4DZ-hz-DiugZ3E30msd_4JoUWNE4Z).
3. Add `libBVLinearGradient.a` to `Build Phases -> Link Binary With Libraries`
   [(Screenshot 1)](https://drive.google.com/open?id=12qT0Z7rfYrhnHYYECzVOAEMTjiPS2vJr) [(Screenshot 2)](https://drive.google.com/open?id=1LZ2CrOHydBjy479r9aEyMkvqqSbIdDLm).
4. Click on `BVLinearGradient.xcodeproj` in `Libraries` and go the `Build
   Settings` tab.
5. Double click the text to the right of `Header Search Paths` and verify that it has `$(SRCROOT)/../react-native/React` - if it isn't, then add it. [(Screenshot)](https://drive.google.com/open?id=1-m3KasC8xudkppVe_E2RsuFaxOfyx6FO).

#### Android

Note: the following steps are only needed for React Native < 0.60

1. in `android/settings.gradle`

   ```groovy
   include ':react-native-linear-gradient'
   project(':react-native-linear-gradient').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-linear-gradient/android')
   ```

1. in `android/app/build.gradle` add:

   ```groovy
   dependencies {
       ...
       implementation project(':react-native-linear-gradient')
   }
   ```

1. and finally, in `android/app/src/main/java/com/{YOUR_APP_NAME}/MainActivity.java` for react-native < 0.29,
   or `android/app/src/main/java/com/{YOUR_APP_NAME}/MainApplication.java` for react-native >= 0.29 add:

```java
// ...
import com.BV.LinearGradient.LinearGradientPackage; // <--- This!
// ...
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new LinearGradientPackage() // <---- and This!
  );
}
```

### Windows (WPF)

1. in `windows/MyApp.sln` Add -> Existing Project: `node_modules/react-native-linear-gradient/windows/LinearGradientWPF/LinearGradientWPF.csproj`

2. in `windows/MyApp/MyAppWPF/MyAppWPF.csproj` Add -> Reference -> LinearGradientWPF

3. in `windows/MyApp/MyAppWPF/AppReactPage.cs` add: `using LinearGradient;`
  and

```csharp
public override List<IReactPackage> Packages => new List<IReactPackage>
{
  ...
  new LinearGradientPackage()
}
```

## Examples

### Simple

The following code will produce something like this:

![Example code result](https://raw.githubusercontent.com/react-native-community/react-native-linear-gradient/master/images/example.png)

```javascript
import LinearGradient from 'react-native-linear-gradient';

// Within your render function
<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
```

### Horizontal gradient

Using the styles from above, set `start` and `end` like this to make the gradient go from left to right, instead of from top to bottom:

```javascript
<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>
```

### Text gradient (iOS)

On iOS you can use the `MaskedViewIOS` to display text with a gradient. The trick here is to render the text twice; once for the mask, and once to let the gradient have the correct size (hence the `opacity: 0`):

```jsx
<MaskedViewIOS maskElement={<Text style={styles.text} />}>
  <LinearGradient colors={['#f00', '#0f0']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
    <Text style={[styles.text, { opacity: 0 }]} />
  </LinearGradient>
</MaskedViewIOS>
```

### Additional props

In addition to regular `View` props, you can also provide additional props to customize your gradient look:

#### colors

An array of at least two color values that represent gradient colors. Example: `['red', 'blue']` sets gradient from red to blue.

#### start

An optional object of the following type: `{ x: number, y: number }`. Coordinates declare the position that the gradient starts at, as a fraction of the overall size of the gradient, starting from the top left corner. Example: `{ x: 0.1, y: 0.1 }` means that the gradient will start 10% from the top and 10% from the left.

#### end

Same as start, but for the end of the gradient.

#### locations

An optional array of numbers defining the location of each gradient color stop, mapping to the color with the same index in `colors` prop. Example: `[0.1, 0.75, 1]` means that first color will take 0% - 10%, second color will take 10% - 75% and finally third color will occupy 75% - 100%.

```javascript
<LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
  colors={['#4c669f', '#3b5998', '#192f6a']}
  style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>
```

![Example with extra props](https://raw.githubusercontent.com/react-native-community/react-native-linear-gradient/master/images/example-other-props.png)

#### useAngle / angle / angleCenter

You may want to achieve an angled gradient effect, similar to those in image editors like Photoshop.
One issue is that you have to calculate the angle based on the view's size, which only happens asynchronously and will cause unwanted flickr.

In order to do that correctly you can set `{ useAngle: true, angle: 45, angleCenter: { x: 0.5, y: 0.5} }`, to achieve a gradient with a 45 degrees angle, with its center positioned in the view's exact center.

`useAngle` is used to turn on/off angle based calculation (as opposed to `start`/`end`).
`angle` is the angle in degrees.
`angleCenter` is the center point of the angle (will control the weight and stretch of the gradient like it does in photoshop.

### Updating the values for fun

Check out [Examples/AnimatedGradient](https://github.com/react-native-community/react-native-linear-gradient/blob/master/Examples/AnimatedGradient/index.js) (`git clone` this project, cd into it, npm install, open in Xcode and run) to see how this is done:

![Example with extra props](https://raw.githubusercontent.com/react-native-community/react-native-linear-gradient/master/images/example-animated.gif)

*This gif was created using [licecap](http://www.cockos.com/licecap/) - a great piece of free OSS*

### An example app

You can see this component in action in [brentvatne/react-native-login](https://github.com/brentvatne/react-native-login/blob/master/App/Screens/LoginScreen.js#L58-L62).

### Other platforms

- Web: [react-native-web-community/react-native-web-linear-gradient](https://github.com/react-native-web-community/react-native-web-linear-gradient)

## Troubleshooting

### iOS build fails: library not found, "BVLinearGradient" was not found in the UIManager

1. Ensure you have followed the [installations steps](https://github.com/react-native-community/react-native-linear-gradient#manual-link-steps-react-native--060) correctly. (`react-native link` for React Native < 0.60 and `npx pod-install` instead for > 0.60).
2. Ensure `pod 'BVLinearGradient', :path => '../node_modules/react-native-linear-gradient'` is present in your `ios/Podfile`
3. Ensure you use `ios/**.xcworkspace` file instead of `ios./**.xcodeproj`

### Invariant Violation: Element type is invalid

Ensure you import the `LinearGradient` correctly:

```
// Like that:
import LinearGradient from 'react-native-linear-gradient

// Not like that:
import { LinearGradient } from 'react-native-linear-gradient
```

### Other

Clearing build caches and reinstalling dependencies sometimes solve some issues. Try next steps:

1. Reinstalling `node_modules` with `rm -rf node_modules && yarn start`
2. Clearing Android Gradle cache with `(cd android && ./gradlew clean)`
3. Reinstalling iOS Cocoapods with `(cd ios && rm -rf ./ios/Pods/**) && npx pod-install`
4. Clering Xcode Build cache (open Xcode and go to Product -> Clean Build Folder)

For other troubleshooting issues, go to [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting.html)

## License

MIT

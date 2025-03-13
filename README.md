# QuickApp

QuickApp is an Expo React Native application that demonstrates authentication and a splash screen. If you're curious about how it works, check the documentation [here](https://docs.expo.dev/router/reference/authentication/) for further details.

## Features

- **Authentication UI**
- **Splash Screen**
- **State Management with Pull-State** (Preferred over React Context for simplicity)
- **Potential Enhancements**:
  - AsyncStorage for persistent authentication state
  - Expo Authentication and Expo Secure Store for Face ID or Fingerprint authentication
  - KeyboardAvoidingView to ensure the keyboard does not overlap input fields

## Why Pull-State?

I chose Pull-State over React Context because React Context, especially with TypeScript, because React Context feels bulky. Pull-State provides a more streamlined state management solution.

## Future Enhancements

While this demo does not include a fully-fledged authentication system, integrating AsyncStorage could enable persistent authentication. Additionally, implementing Face ID or fingerprint authentication using Expo Secure Store could further enhance security.

## Development Time Considerations

This project takes more than just a few minutes or an hour to complete due to several factors:

#### Setting Up a Proper Splash Screen and App Icon in Expo  


- Designing and creating an app icon
- Setting up the splash screen and Icon: You can't just add any icon and expect it to be a percefect splash screen and icon. You have to use expo doc to structure your icon on Figma to be perfect. Check [here](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.figma.com/community/file/1155362909441341285/expo-app-icon-splash&ved=2ahUKEwjyh7bCzoaMAxVkVUEAHVORJ2oQFnoECAkQAQ&usg=AOvVaw2mBMefVF6L9XA2Dm2FHoq-) and [docs](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/#export-the-icon-image-as-a-png) for more info, if you doubt.
- Uploading to GitHub
- Writing a README
- Build time and other optimizations


You can't just add any image and expect it to be a perfect splash screen or app icon. To ensure optimal display and compatibility, we have to follow Expo's guidelines for structuring your icon in Figma.

#### Setting up splash screen and icon:  
1. **Use the Figma Template** – Structure your icon correctly using [this Figma file](https://www.figma.com/community/file/1155362909441341285/expo-app-icon-splash).  
2. **Export the Icon as PNG** – Follow Expo's [official documentation](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/#export-the-icon-image-as-a-png) to properly export your icon.  

By adhering to these guidelines, you ensure that your app's branding appears professional across different devices and screen sizes.



## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/den-ii/QuickApp.git
   cd QuickApp
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Run the project:
   ```sh
   expo start
   ```
4. Or download android apk [here]()

## License

This project is licensed under the MIT License.

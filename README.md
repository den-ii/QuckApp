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

- Designing and creating an app icon
- Setting up the splash screen
- Uploading to GitHub
- Writing a README
- Build time and other optimizations

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

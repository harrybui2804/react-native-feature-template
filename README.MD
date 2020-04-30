# ⚛️ React Native Feature Template

[![React Native](https://img.shields.io/badge/React%20Native-v0.62.2-green.svg)](https://facebook.github.io/react-native/)
[![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v5.1-blue.svg)](https://reactnavigation.org/)

React Native Feature Template is a starting point for React Native application. This project is configured with redux, redux saga and redux persist and multi flavour. Uses latest version of react-navigation (v5)

## Features

- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen.git)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native Svg](https://github.com/react-native-community/react-native-svg.git)
- [Redux](http://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/)

## Project Structure
- `__env__` - Setup your environment for development or product release
- `/app` - Contains our React Native App codebase
  - `/api` - Api module class. Each file will be feature based like ProductAPI, LoginAPI etc
  - `/components` - universal shared components used by others.
  - `/config` - Universal colors, images, styles etc..
  - `/features` - Config files
    - `login`- Each folder will be a feature like this.
      - `reducers` - Reducer associated with this feature [Mostly one, can be multiple]
      - `sagas` - Sagas related with this particular feature [can have single or muliple sagas associated]
      - `components` - Components associated with this feature.
      - `containers` - Containers associated with this feature [**Container - Component Structure**]
  - `/lib` - lib helper files
  - `/navigation` - All naviagtion related stuff including helpers functions and navigation stack
    - `RootNavigation.js` - Service class for root stack navigation - can be used without using props
    - `NavigationStack.js` - Root navigation of project
  - `/store` - Includes everything you need to set up store.
    - `reducers` - Combines all feature based reducers
    - `sagas` - Combines all feature based sagas
    - `index.js` - Set ups store and export things

## Getting Started

1. Clone this repo, `git clone https://github.com/harrybui2804/react-native-feature-template.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name `$ npx react-native-rename <newName>`
5. Run `yarn install` to install dependencies
6. Config environment for android and ios
- On Android: 
    - Open `android/app/build.gradle`
    - Edit in `productFlavors` your applicationId and resValue app_name
- On iOS:
    - Open `ios/YourReactProject.xcworkspace` in Xcode
    - Select target `dev` and `prod` and change your BundleID and Display Name
7. Config api endpoint and other environment
- Open `__env__/dev/env.js` and `__env__/prod/env.js`
- Edit your api endpoint and other environment
- Add other file as google-services.json and GoogleService-Info.plist to `dev` or `prod` and edit `list` in `__env/index.js`
9. Run the application:
- Set environment you config in `__env__` folder
    - Run `yarn set-env-dev` or `yarn set-env-prod`
- On Android:
  - Run `yarn run-a-dev` or `yarn run-a-prod`
- On iOS:
  - Run `yarn run-i-dev` or `yarn run-i-prod`

9. Enjoy!!!

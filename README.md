# React Native  

React Native is a **cross-platform JavaScript framework** that runs on React. It allows developers to build **native mobile applications** using JavaScript and React.  

Developers can test their code using **Snack Player**, an online editor provided by **Expo** for quickly testing and sharing React Native code.  

---

## Basic Components  

React Native provides essential UI components similar to HTML elements in JSX.  

### View  
- A fundamental **container** component.  
- Similar to `<div></div>` in JSX.  
- Used to structure layouts and wrap other components.  

### Text  
- Used for **displaying text** in a React Native app.  
- Works like `<p></p>` in JSX.  

### Image  
- Used to display images in the app.  
- Functions like `<img />` in JSX.  

### ScrollView  
- A **scrollable container** that can hold multiple components and views.  
- Allows both **horizontal and vertical scrolling**.  
- Unlike **FlatList**, ScrollView loads **all content at once**, which can cause **performance issues** for large lists.  
- Supports **zoom-in and zoom-out** gestures.  

### TextInput  
- Acts like `<input />` in JSX.  
- Allows users to enter **text input**.  
- Important props:  
  - **onChangeText**: A function called when the text changes.  
  - **onSubmitEditing**: A function called when the text is submitted.  

---

## FlatList  

- Used for **efficiently rendering large lists**.  
- Loads only the **visible items** instead of rendering everything at once.  
- Key props:  
  - **data**: The array containing the list items.  
  - **renderItem**: A function that formats how each item is displayed.  

---

## SectionList  

- Similar to **FlatList** but supports **grouped sections**.  
- Used for **categorized data** (e.g., contacts list, grouped messages).  
- Includes headers and sub-items for better organization.  

---

## Platform Module  

The **Platform module** provides information about the operating system the app is running on.  

### Example:  
```js
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
```
- This sets different heights for **iOS** and **Android**.  

---

## Platform-Specific Extensions  

React Native allows developers to create **platform-specific files** using extensions. The correct file is **automatically detected and used** based on the platform the app is running on.

### Example:  

```sh
BigButton.ios.js
BigButton.android.js
```

When importing the component:
```js
import BigButton from './BigButton';
```
- React Native will **automatically** choose `BigButton.ios.js` on iOS and `BigButton.android.js` on Android.  
- This helps keep platform-specific logic separate without extra code in a single file.  

---

## Native-Specific Extensions  

React Native also supports writing **platform-independent code** that can be shared across **mobile, web, and NodeJS**.  

---

# Expo  

**Expo** is a production-grade **React Native framework** that simplifies app development. It provides:  
- Developer tools for a **faster development** experience.  
- A **standard library** of native modules.  
- **File-based routing** for easy navigation.  

## Creating a New Expo App  

Run the following command to create a new Expo project:  
```sh
npx create-expo-app@latest
```
Move into the project directory and start the app:  
```sh
npx expo start
```
- You can use an **Android/iOS emulator** to preview the app (**emulator setup required**).  

---

## Expo File Structure  

A typical **Expo project** follows this structure:  

```
- app
- assets
- components
- constants
- hooks
- scripts
- app.json
- package.json
- tsconfig.json
```

### app  
- Defines the **main file structure** of the application.  

### assets  
- Stores **static assets** such as images, icons, and fonts.  

### components  
- Contains **reusable UI components** (e.g., buttons, cards, and modals).  

### constants  
- Stores **global values** like theme colors and API URLs.  

### hooks  
- Contains **custom hooks** that share logic between components.  

### scripts  
- Stores **automation scripts** to manage the project efficiently.  

### Example: Reset the project  
```sh
npm run reset-project
```
- Moves the app into a **backup folder** (`app-example`) and creates a **new app directory**.  

---

This Markdown file is now **properly formatted, well-structured, and includes additional explanations**. 🚀



## EAS CLI

- its a tool that can be used to fasten development

```sh
npm install -g eas-cli
```

## Expo Doctor

- its is used to debugg 
```sh
npx expo-doctor
```

## Expo router 

- it helps us manage routing in our react-native app any file under app becomes a route

### _Layout file

- it contains the basic structure of an app window stack

### stack navigator

- it helps us navigate between different screens and navigation history
- we use **Link** to navigate between screens in react-native
- we export link from expo-router




```js
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details">View details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

#### link
- we can use link to route dynamic links by adding query parameter or statically or use href object
- lets target it statically

```js
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

- You can also use the href object to provide a pathname which takes the value of the dynamic route and passes params

```js
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: 'bacon' },
        }}>
        View user details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### accessparameters from dynamic segments

- we can do this by using useLocalSearchParams() hook that returns url parameter for the selected route



## Group

- its files with a similar layout and are placed inside the parethesis (group)

## Tab navigator

- help navigate between screens using bottom tab bar

## +not-found file

- help create a file to handle 404 routes

## Dynamic Routes

- this enable match dynamic routes with dynamic segments embedded in the url
- we can creat it by wrapping file in square brackets eg [id].tsx

## Stack 

- its how we navigate in react native between routes and it animates on top of the screen
- we can configure routes statically using `<Stack.Screen name={routeName} />` or `navigation.setOptions()`

```js
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}
```

```js
import { Stack, useNavigation } from 'expo-router';
import { Text, View } from 'react-native';
import { useEffect } from 'react';

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
```

## configuring header bar 

we can use the **screenOptions** prop in Stack 

```js
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
```

## set screen options

- we can use ` imperative API's router.setParams()` to configure dynamic routes 

## custom push behaviour

- React-native prevent pushing duplicate screens on navigation stack. This can be overwritten
by using `getId()` in `<Stack.Screen>` 
- its useful for profile pages, chat screens, or any screen requiring multiple instances.

## Removing stack screens

- we can use `router.back()` or `router.dismiss()` to remove screen from the navigation stack.

###  back vs dismiss 
- Back vs. Dismiss

    - Back (router.back())
        - Goes back one step in the navigation history.
        - Works only within the current navigator.
        - If you have nested navigators, calling back() will only affect the inner navigator.

    - Dismiss (router.dismiss())
        - Removes the current screen from the closest stack.
        - If it's the only screen in the stack, the whole stack will be dismissed.
        - Works across nested navigators and removes multiple screens if necessary.
        - You can pass a number to dismiss multiple screens at once.

```js
import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Dismiss Screen" onPress={() => router.dismiss()} />
    </View>
  );
}
```

## dismissTo 

- it removes multiple screen until a specif route has reached
- if route doesn't exist it pushes it on to the stack

```js 
import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Go back to Home" onPress={() => router.dismissTo('/home')} />
    </View>
  );
}
```

## dismissAll 

- it returns to the first screen of the closest stack

## canDismiss

- check if we can dismiss the current route and returns a boolean

```js
import { Button, View } from 'react-native';

import { useRouter } from 'expo-router';


export default function Settings() {
  const router = useRouter();

  const handleDismiss = (count: number) => {
    if (router.canDismiss()) {
      router.dismiss(count)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Maybe dismiss" onPress={() => handleDismiss()} />
    </View>
  );
}
```

## tabs Dynamic routes

You can use a dynamic route in a tab bar. For example, you have a [user] tab that shows a user's profile. You can use the href option to link to a specific user's profile.

```js
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        {/* Name of the dynamic route.*/}
        name="[user]"
        options={{
          {/* Ensure the tab always links to the same href.*/}
          href: '/evanbacon',
          {/* OR you can use the href object.*/}
          href: {
            pathname: '/[user]',
            params: {
              user: 'evanbacon',
            },
          },
        }}
      />
    </Tabs>
  );
}
```

## Drawer

- Drawer navigation is a navigation pattern in React Native that provides a side menu (or sliding menu). It allows users to swipe from the left (or tap a button) to open a menu containing navigation options.
- we install it by runnig the command 

```sh
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```
## Modals 
- they are mostly used for prompts since they display over the current screen.(used as routes within an existing stack)
common uses are:
  - independent tasks that don't need to be part of the navigation
  - alerts and confirmation dialogs

## react native reanimated

## modal presentation options

## shared routes 

- it enable use to reuse the same screen across different layouts or tabs while maintaining a single URL structure.
- this helps us not to duplicate files on different routes 

## custom tab layout

### expo-router/ui


## Using tailwind on React native

- install tailwind (manual on **https://www.nativewind.dev/getting-started/installation**)
- run this command in your root directory
```sh
npx expo install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
```
- create a tailwind file by running

```sh
npx tailwindcss init
```
- copy and paste this in the file

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- create a babel.config.js then paste this

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

- create a metro file by running this

```sh
npx expo customize metro.config.js
```
- a metro.config.js file will appear , now paste this into it

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })
```

- create a css file with and paste this into it

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- now import the file into the main layout

```js
import "./global.css"

- if you are experiencing trouble with classnames you can add this file onto the root . name : 

```nativewind-env.d.ts```

- paste this into it 

```ts
/// <reference types="nativewind/types" />

// NOTE: This file should not be edited and should be committed with your source code. It is generated by NativeWind.
```


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

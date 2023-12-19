// import React, { useEffect } from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons, Entypo } from '@expo/vector-icons';
// import Post from './Post';
// import Search from './Search';
// import Headlines from './Headlines';
// import References from './Reference';
// import DateTime from './DateTime';
// import Meeting from './Meeting';
// import NewPostScreen from './AddPost';
// import Poll from './Poll';
// import { Alert } from 'react-native';


// const Tab = createBottomTabNavigator();

// const Navbar = ({ navigation }) => {
//   useEffect(() => {
//     const unsubscribe = navigation.addListener('beforeRemove', (e) => {
//       // Prevent default behavior of leaving the screen
//       e.preventDefault();
  
//       // Navigate to the current screen with replace method
//       navigation.replace(e.data.action.destination);
  
//       // Show an alert to the user
//       Alert.alert(
//         'Cannot go back',
//         'You cannot go back to the previous screen',
//         [{ text: 'OK', onPress: () => {} }],
//         { cancelable: false }
//       );
//     });
  
//     return unsubscribe;
//   }, [navigation]);
  

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           } else if (route.name === 'Settings') {
//             iconName = focused ? 'settings' : 'settings-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           } else if (route.name === 'Notifications') {
//             iconName = focused ? 'notifications' : 'notifications-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           } else if (route.name === 'Search') {
//             iconName = focused ? 'search' : 'search-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           }
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'black',
//         inactiveTintColor: 'gray',
//         style: {
//           backgroundColor: 'white',
//         },
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//       <Tab.Screen name="Notifications" component={NotificationsScreen} />
//       <Tab.Screen name="Search" component={SearchScreen} />
//       <Tab.Screen
//         name="NewPost"
//         component={NewPostScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="new-message" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Signout"
//         component={SignoutScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="log-out-outline" size={size}
//             color={color} />
// ),
// tabBarButton: () => (
// <View style={styles.signoutButton}>
// <Button
// title="Sign Out"
// onPress={() => {
// // Implement sign out functionality here
// }}
// />
// </View>
// ),
// }}
// />
// </Tab.Navigator>
// );
// };

// const HomeScreen = () => {
// return (
// <View style={styles.container}>
// <Poll />
// </View>
// );
// };


// const SignoutScreen = () => {
// return (
// <View style={styles.container}>
// <Meeting />
// </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// signoutButton: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// export default Navbar;
import React, { useEffect } from 'react';
import { View, StyleSheet, Button, LogBox } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Search from './Search';
import Headlines from './Headlines';
import References from './Reference';
import DateTime from './DateTime';
import NewPostScreen from './AddPost';
import Poll from './Poll';

LogBox.ignoreLogs(["Cannot record touch end without a touch start"]);

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Poll') {
            iconName = focused ? 'new-message' : 'new-message';
            return <Entypo name={iconName} size={size} color={color} />;
          }
        },

        tabBarLabel: '', // hide the text label
        headerShown: false,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Poll" component={Poll} />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NewPostScreen />
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Headlines />
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <References/>
    </View>
  );
};

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <DateTime />
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navbar;


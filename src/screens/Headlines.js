// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Keyboard,
//   Image,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';

// const TaskManager = () => {
//   const [task, setTask] = useState('');
//   const [image, setImage] = useState(null);
//   const [tasks, setTasks] = useState([]);

//   const handleAddTask = () => {
//     if (task.length > 0) {
//       setTasks([...tasks, { id: tasks.length + 1, title: task, image: image }]);
//       setTask('');
//       setImage(null);
//       Keyboard.dismiss();
//     }
//   };

//   const handleDeleteTask = (id) => {
//     const updatedTasks = tasks.filter((task) => task.id !== id);
//     setTasks(updatedTasks);
//   };

//   const handlePickImage = async () => {
//     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       alert('Permission to access camera roll is required!');
//       return;
//     }
//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (!pickerResult.cancelled) {
//       setImage(pickerResult.uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Task Manager</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Add a task"
//           value={task}
//           onChangeText={setTask}
//         />
//         <TouchableOpacity style={styles.imageButton} onPress={handlePickImage}>
//           {image ? (
//             <Image style={styles.imagePreview} source={{ uri: image }} />
//           ) : (
//             <Ionicons name="camera-outline" size={32} color="#ff5a5f" />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
//           <Ionicons name="ios-add" size={32} color="#ff5a5f" />
//         </TouchableOpacity>
//       </View>
//       {tasks.map((task) => (
//         <TouchableOpacity
//           key={task.id}
//           style={styles.taskContainer}
//           onPress={() => handleDeleteTask(task.id)}
//         >
//           <View style={styles.imageContainer}>
//             {task.image ? (
//               <Image style={styles.image} source={{ uri: task.image }} />
//             ) : (
//               <Ionicons name="image-outline" size={32} color="#666" />
//             )}
//           </View>
//           <View style={styles.textContainer}>
//             <Text style={styles.title}>{task.title}</Text>
//           </View>
//           <Ionicons name="ios-close-circle-outline" size={24} color="red" />
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F7F7F7',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     backgroundColor: '#ff5a5f',
//     borderColor: '#ccc',
//     borderRadius: 5,
//     fontSize: 18,
//     padding: 10,
//     color: '#fff',
//     marginRight: 10,
//     },
//     imageButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
//     imagePreview: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     },
//     addButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
//     taskContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//     },
//     imageContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#ccc',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//     },
//     image: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     },
//     textContainer: {
//     flex: 1,
//     },
//     title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     },
//     });
    
//     export default TaskManager;
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const HeadlinesPage = () => {
  const data = [
    { id: '1', title: 'Headline 1', description: 'This is headline 1' },
    { id: '2', title: 'Headline 2', description: 'This is headline 2' },
    { id: '3', title: 'Headline 3', description: 'This is headline 3' },
    { id: '4', title: 'Headline 4', description: 'This is headline 4' },
    { id: '5', title: 'Headline 5', description: 'This is headline 5' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#ff5a5f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default HeadlinesPage;

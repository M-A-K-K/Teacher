import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/core';

const NewPostScreen = () => {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const navigation = useNavigation();

  const handleSignOut = () => {
    // Implement your sign-out logic here
    navigation.replace('Signup');
  };

  const handleNewPost = () => {
    // Navigate to the new post screen
    navigation.replace('NewPostScreenn');
  };

  const handleAddToSociety = () => {
    // Implement your "Add to society" logic here
    console.log("");
    navigation.replace('AddToSocietyPage');
  };

  return (
    <View style={styles.container}>
      {/* Add the "Add to society" button */}
      <TouchableOpacity style={styles.addToSocietyButton} onPress={handleAddToSociety}>
        <Text style={styles.addToSocietyButtonText}>Add to society</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.postButton} onPress={handleNewPost}>
        <Text style={styles.postButtonText}>New Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
      
      {/* Render the list of posts */}
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            {post.image && <Image source={{ uri: post.image }} style={styles.postImage} />}
            <Text style={styles.postText}>{post.text}</Text>
          </View>
        ))
      ) : (
        <Text>No posts available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%'
  },
  addToSocietyButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ff5a5f',
    margin: 20,
  },
  addToSocietyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  
  },
  input: {
    marginTop: 70,
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  addPostButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    margin: 20,
  },
  addPostButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    margin: 20,
  },
  imageButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    margin: 20,
  },
  signOutButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ff5a5f',
    margin: 20,
  },
  signOutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    },
    imageButtonText: {
    fontSize: 16,
    },
    postButton: {
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ff5a5f',
    marginTop: 10,
    marginBottom: 20,
    },
    postButtonText: {
    fontSize: 16,
    color: '#fff',
    },
    postContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    },
    postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    },
    postText: {
    fontSize: 18,
    },
    });
    
    export default NewPostScreen;
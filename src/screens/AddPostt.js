import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const NewPostScreenn = () => {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const navigation = useNavigation();

  const handleSignOut = () => {
    // Implement your sign-out logic here
    navigation.replace('Signup');
  };

  // Open device image library to pick an image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  // Function to handle submitting the new post
  const handlePost = () => {
    // Create a new post object with the text and image
    const newPost = {
      text: postText,
      image: image,
    };

    // Add the new post to the list of posts
    setPosts([...posts, newPost]);

    // After successful submission, clear the input fields
    setPostText('');
    setImage(null);

    // Pass the new post data to the "OtherScreen" without navigating to it
    navigation.navigate('SelectedDatePage', { newPost });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Type your post here"
        multiline={true}
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>Select Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>

      {/* Render the list of posts */}
      {posts.map((post, index) => (
        <View key={index} style={styles.postContainer}>
          {post.image && <Image source={{ uri: post.image }} style={styles.postImage} />}
          <Text style={styles.postText}>{post.text}</Text>
        </View>
      ))}
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
  input: {
    marginTop: 70,
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5},
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
    backgroundColor: '#ccc',
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
    backgroundColor: '#ff5a5f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
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
    
    export default NewPostScreenn;

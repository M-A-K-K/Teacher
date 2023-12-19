import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton } from 'react-native-paper';
console.ignoredYellowBox = ['Cannot record touch end without a touch start'];

export default function SignupForm ({ navigation })  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [userType, setUserType] = useState('user');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSignup = () => {     
    navigation.navigate('Login', { email, password });
  }
  
  const GoLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

<View style={styles.radioGroup}>
        <Text style={styles.radioLabel}>Sign up as:</Text>
        <View style={styles.radioButtons}>
          <RadioButton
            value="user"
            status={userType === 'user' ? 'checked' : 'unchecked'}
            onPress={() =>
              setUserType('user')
            }
          />
          <Text>User</Text>
          <RadioButton
            value="admin"
            status={userType === 'admin' ? 'checked' : 'unchecked'}
            onPress={() => setUserType('admin')}
          />
          <Text>Admin</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={GoLogin}>
        <Text style={styles.linkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    },
    radioLabel: {
    marginRight: 10,
    fontSize: 16,
    },
    radioButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    },
  button: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
},
link: {
marginTop: 20,
},
linkText: {
color: '#333',
},
imageButton: {
marginTop: 10,
backgroundColor: '#ff5a5f',
paddingVertical: 10,
borderRadius: 5,
width: '100%',
alignItems: 'center',
},
image: {
width: 150,
height: 150,
borderRadius: 75,
marginBottom: 20,
},
});

// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// const BookDisplay = () => {
//   const [books, setBooks] = useState([{ image: require('./book1.jpg'), author: 'J.K. Rowling' }, { image: require('./book2.jpg'), author: 'Stephen M.R COVEY' }]);
//   const [newBook, setNewBook] = useState({ image: '', author: '' });

//   const handleAddBook = () => {
//     setBooks([...books, newBook]);
//     setNewBook({ image: '', author: '' });
//   };

//   return (
//     <View style={styles.container}>
//       {books.map((book, index) => (
//         <View key={index} style={styles.bookContainer}>
//           <Image 
//             source={book.image}
//             style={styles.bookImage}
//           />
//           <Text style={styles.authorName}>{book.author}</Text>
//         </View>
//       ))}
//       <View style={styles.addBookContainer}>
//         <TextInput
//           placeholder="Image URL"
//           style={styles.addBookInput}
//           value={newBook.image}
//           onChangeText={(text) => setNewBook({ ...newBook, image: text })}
//         />
//         <TextInput
//           placeholder="Author Name"
//           style={styles.addBookInput}
//           value={newBook.author}
//           onChangeText={(text) => setNewBook({ ...newBook, author: text })}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
//           <Text style={styles.addButtonText}>Add Book</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bookContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   bookImage: {
//     width: 100,
//     height: 150,
//     marginRight: 10,
//   },
//   authorName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   addBookContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   addBookInput: {
//     width: '80%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginVertical: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   addButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default BookDisplay;
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Animated, Modal, TextInput, TouchableOpacity } from 'react-native';

const academicResources = [
  {
    id: '1',
    title: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1683317976063-678cbe8558b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=10',
  },
  {
    id: '2',
    title: 'Science',
    image: 'https://images.unsplash.com/photo-1683482027825-01e87aa0e435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=10',
  },
  {
    id: '3',
    title: 'History',
    image: 'https://example.com/history.png',
  },
  {
    id: '4',
    title: 'Literature',
    image: 'https://example.com/literature.png',
  },
  {
    id: '5',
    title: 'Languages',
    image: 'https://example.com/languages.png',
  },
  {
    id: '6',
    title: 'Social Studies',
    image: 'https://example.com/social-studies.png',
  },
];

const ResourceCard = ({ title, image }) => (
  <View style={styles.card}>
    <View style={styles.cardImageWrapper}>
      <Animated.Text style={[styles.cardTitle, styles.animatedText]}>{title}</Animated.Text>
    </View>
    <View style={styles.cardImageWrapper}>
      <Image source={{ uri: image }} style={styles.cardImage} />
    </View>
  </View>
);
const References = () => {
  const [resources, setResources] = useState(academicResources);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleAddResource = () => {
    const newResource = { id: `${resources.length + 1}`, title, image };
    setResources([...resources, newResource]);
    setTitle('');
    setImage('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={resources}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ResourceCard title={item.title} image={item.image} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add Resource</Text>
          <TextInput
            placeholder="Enter title"
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            placeholder="Enter image URL"
            style={styles.input}
            value={image}
            onChangeText={(text) => setImage(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddResource}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'space-around',
  },
  card: {
    width: 160,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  cardImageWrapper: {
    flex: 2,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
  },
  animatedText: {
    transform: [{ translateY: 20 }],
  },
  addButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor:'#ccc',
    backgroundColor: '#f44336',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    },
    cancelButton: {
    backgroundColor: '#f44336',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    },
    cancelButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    });
    
    export default References;

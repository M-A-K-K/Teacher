import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';

const availableRooms = [
  {
    id: '1',
    name: 'Single Room',
    price: 100,
    description: 'A cozy room with a single bed',
    image: 'https://www.workspace.co.uk/media/properties/the%20leather%20market/workspace-15.jpg?width=1200&height=630&mode=crop&format=jpeg&quality=60&v=202207051736',
  },
  {
    id: '2',
    name: 'Double Room',
    price: 150,
    description: 'A spacious room with a double bed',
    image: 'https://unsplash.com/photos/0sT9YhNgSEs',
  },
  {
    id: '3',
    name: 'Suite',
    price: 250,
    description: 'A luxurious suite with a king-size bed and a balcony',
    image: 'https://unsplash.com/photos/VM1Voswbs0A',
  },
];

const RoomCard = ({ name, price, description, image, onPress }) => {
  const [cardWidth, setCardWidth] = useState(0);
  const cardHeight = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.timing(cardHeight, {
      toValue: cardWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
    onPress();
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.cardImageWrapper}>
        <Animated.Image source={{ uri: image }} style={[styles.cardImage, { height: cardHeight }]} onLoad={() => setCardWidth(cardHeight._value)} />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Text style={styles.cardPrice}>${price}/night</Text>
      </View>
    </TouchableOpacity>
  );
};

const AvailableRooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={availableRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RoomCard
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            onPress={() => setSelectedRoom(item)}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      {selectedRoom && (
        <View style={styles.selectedRoom}>
          <View style={styles.selectedRoomImageWrapper}>
            <Image source={{ uri: selectedRoom.image }} style={styles.selectedRoomImage} />
          </View>
          <View style={styles.selectedRoomDetails}>
            <Text style={styles.selectedRoomName}>{selectedRoom.name}</Text>
            <Text style={styles.selectedRoomDescription}>{selectedRoom.description}</Text>
            <Text style={styles.selectedRoomPrice}>${selectedRoom.price}/night</Text>
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={() => alert(`You have booked the ${selectedRoom.name}`)}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    marginVertical: 5,
  },
  cardImageWrapper: {
    height: 150,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  cardDetails: {
    padding: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    marginVertical: 5,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  selectedRoom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  selectedRoomImageWrapper: {
    height: 200,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedRoomImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  selectedRoomName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedRoomDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  selectedRoomPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

  
  export default AvailableRooms;

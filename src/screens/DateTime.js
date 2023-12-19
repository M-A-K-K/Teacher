// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
// import moment from 'moment';
// import CalendarPicker from 'react-native-calendar-picker';

// const DateTime = ({ navigation }) => {
//   const [roomNumber, setRoomNumber] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const handleAddRoom = () => {
//     // pass the room number, selected date, and selected time as props when navigating to the next page
//     navigation.navigate('Meeting', {
//       roomNumber,
//       selectedDate,
//       selectedTime,
//     });
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(moment(time, 'h:mm A').format('LT'));
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(moment(date).format('L'));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Room</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter room number"
//         onChangeText={setRoomNumber}
//         value={roomNumber}
//       />
//       <View style={styles.row}>
//         <CalendarPicker
//           onDateChange={handleDateChange}
//           width={300}
//           height={300}
//           backgroundColor= '#ff5a5f'
//           selectedDayColor="#ff5a5f"
//           selectedDayTextColor="#fff"
//         />
//       </View>
//       <View style={styles.row}>
//         <Text style={styles.label}>Enter a time:</Text>
//         <TextInput
//           style={styles.timeInput}
//           keyboardType="numeric"
//           placeholder="00:00 AM"
//           onChangeText={handleTimeChange}
//           value={selectedTime}
//         />
//       </View>
//       <Button 
//         title="Add Room" 
//         onPress={handleAddRoom} 
//         disabled={!roomNumber || !selectedDate || !selectedTime} 
//         style={styles.button} 
//       />
//       <View style={styles.link}>
//         <Text style={styles.linkText}>Cancel</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
    
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
    
//     backgroundColor: '#ff5a5f',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     fontSize: 18,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     marginRight: 10,
//     color: '#333',
//   },
//   timeInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
    
//     backgroundColor: '#ff5a5f',
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     width: 150,
//     fontSize: 18,
//   },
//   button: {
//     backgroundColor: '#ff5a5f',
//     paddingVertical: 15,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//     },
//     link: {
//     marginTop: 20,
//     },
//     linkText: {
//     color: '#ff5a5f',
//     fontSize: 18,
//     },
//     });
    
//     export default DateTime;
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';


const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  
  const navigation = useNavigation();

  const handleSelect = () => {
    console.log(selectedDate);
    navigation.navigate('SelectedDatePage', { selectedDate });
  };

  return (
    <View style={styles.container}>
      <Calendar onDayPress={handleDayPress} markedDates={{ [selectedDate]: { selected: true } }} />
      <Button mode="contained" disabled={!selectedDate} onPress={handleSelect}>
        Select
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default CalendarPage;

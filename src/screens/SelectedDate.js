import React from 'react';
import { View, Text } from 'react-native';

const SelectedDatePage = ({ route }) => {
  const { selectedDate } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>You selected:</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{selectedDate}</Text>
    </View>
  );
};

export default SelectedDatePage;

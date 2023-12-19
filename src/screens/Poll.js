
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, IconButton, RadioButton, Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PollPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [polls, setPolls] = useState([
    { id: 1, question: 'What is your favorite animal?', options: [
      { id: 1, label: 'Dog' },
      { id: 2, label: 'Cat' },
      { id: 3, label: 'Bird' },
      { id: 4, label: 'Fish' },
    ]},
  ]);
  const [newPollQuestion, setNewPollQuestion] = useState('');
  const [newPollOptions, setNewPollOptions] = useState([]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.id);
  };

  const handleSubmit = () => {
    console.log('Selected option:', selectedOption);
  };

  const handleAddOption = () => {
    const newOptionLabel = prompt('Enter new poll option:');
    if (newOptionLabel) {
      const newOption = {
        id: newPollOptions.length + 1,
        label: newOptionLabel,
      };
      setNewPollOptions([...newPollOptions, newOption]);
    }
  };

  const handleAddPoll = () => {
    if (newPollQuestion && newPollOptions.length > 1) {
      const newPoll = {
        id: polls.length + 1,
        question: newPollQuestion,
        options: newPollOptions,
      };
      setPolls([...polls, newPoll]);
      setNewPollQuestion('');
      setNewPollOptions([]);
    } else {
      alert('Please enter a poll question and at least two options.');
    }
  };

  return (
    <View style={styles.container}>
      {polls.map((poll) => (
        <View key={poll.id} style={styles.pollContainer}>
          <Text style={styles.title}>{poll.question}</Text>
          {poll.options.map((option) => (
            <View style={styles.optionContainer} key={option.id}>
              <RadioButton
                value={option.id}
                status={selectedOption === option.id ? 'checked' : 'unchecked'}
                onPress={() => handleOptionSelect(option)}
              />
              <Text style={styles.optionLabel}>{option.label}</Text>
            </View>
          ))}
        </View>
      ))}
      <View style={styles.newPollContainer}>
        <Text style={styles.newPollLabel}>Add new poll:</Text>
        <TextInput
          style={styles.newPollInput}
          placeholder="Enter poll question"
          value={newPollQuestion}
          onChangeText={(text) => setNewPollQuestion(text)}
        />
        {newPollOptions.map((option) => (
          <View style={styles.optionContainer} key={option.id}>
            <Icon name="drag-vertical" size={24} style={styles.optionIcon} />
            <TextInput
              style={styles.optionInput}
              placeholder="Enter poll option"
              value={option.label}
              onChangeText={(text) => {
                const updatedOption = { ...option, label: text };
                const updatedOptions = newPollOptions.map((o) => o.id === option.id ? updatedOption : o);
                setNewPollOptions(updatedOptions);
                }}
                />
                <IconButton
                icon="delete"
                size={24}
                style={styles.optionIcon}
                onPress={() => {
                  const updatedOptions = newPollOptions.map((o) => o.id === option.id ? updatedOption : o);

                setNewPollOptions(updatedOptions);
                }}
                />
                </View>
                ))}
                <Button mode="outlined" onPress={handleAddOption}>
                Add Option
                </Button>
                <Button mode="contained" onPress={handleAddPoll}>
                Add Poll
                </Button>
                </View>
                </View>
                );
                };
                
                const styles = StyleSheet.create({
                container: {
                flex: 1,
                padding: 20,
                backgroundColor: '#fff',
                },
                pollContainer: {
                marginBottom: 20,
                },
                title: {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                },
                optionContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
                },
                optionLabel: {
                marginLeft: 10,
                },
                newPollContainer: {
                marginTop: 20,
                },
                newPollLabel: {
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
                },
                newPollInput: {
                marginBottom: 10,
                },
                optionInput: {
                flex: 1,
                },
                optionIcon: {
                marginRight: 10,
                },
                });
                
                export default PollPage;

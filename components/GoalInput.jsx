import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableHighlight } from 'react-native';

const GoalInput = props => {
const [inputValue, setInputValue] = useState('');

const handleInputChange = (val) => {
    setInputValue(val);
}

return (
    <View style={styles.inputWithButtonContainer}>
      <TextInput placeholder="Enter your goal..." style={styles.input} onChangeText={handleInputChange} value={inputValue} />
      <Button title="ADD" onPress={() => props.onAddButtonPress(inputValue)} />
    </View>
);
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
    inputWithButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default GoalInput;
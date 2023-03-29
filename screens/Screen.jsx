import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import colors from '../const/colors';

const Screen = props => {
    const [inputValue, setInputValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [inputConfirmed, setInputConfirmed] = useState(false);

    const inputHandler = (inputVal) => {
        setInputValue(inputVal.replace(/[^0-9]/g, ''));
    };
    const resettingHandler =() => {
        setInputValue('');
        setInputConfirmed(false);
    };
    const confirmingHandler = () => {
        const chosenNumber = parseInt(inputValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return Alert.alert('Wrong number!', 'Please, try to enter correct number', [{text: 'OK', onPress: resettingHandler}]);
        }
        setInputConfirmed(true);
        setSelectedNumber(parseInt(inputValue));
        setInputValue('');
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screenContainer}>
                <Text style={styles.title}>Welcome to the game!</Text>
                <Card customStyle={styles.inputContainer}>
                    <Text>Choose a number</Text>
                    <TextInput
                      style={styles.input}
                      blurObSubmit
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='number-pad'
                      onChangeText={inputHandler}
                      maxLength={2}
                      value={inputValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='Reset' color={colors.RED} onPress={resettingHandler} /></View>
                        <View style={styles.button}><Button title='Confirm' color={colors.PURPLE} onPress={confirmingHandler} /></View>
                    </View>
                </Card>
                {inputConfirmed && (
                    <Card style={styles.summary}>
                        <Text>You selected:</Text>
                        <View style={styles.numberContainer}>
                            <Text style={styles.numberText}>{selectedNumber}</Text>
                        </View>
                        <Button title='Start' onPress={() => props.onStart(selectedNumber)} />
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
    },
    input: {
        width: 100,
        height: 30,
        borderColor: colors.BLACK,
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
    summary: {
        alignItems: 'center',
        marginTop: 20,
    },
    numberContainer: {
        borderWidth: 2,
        borderColor: colors.BLACK,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontSize: 22,
        color: colors.BLACK,
    },
});

export default Screen;
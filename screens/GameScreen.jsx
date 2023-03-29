import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useState, useRef } from 'react';
import Card from '../components/Card';
import colors from '../const/colors';

const generateNumberForGame = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max-min)) + min;
    if (randomNum === exclude) {
        return generateNumberForGame(min, max, exclude);
    } else {
        return randomNum;
    }
}

const GameScreen = props => {
    const [guessedNum, setGuessedNum] = useState(generateNumberForGame(1, 100, props.chosenNumber));
    const lowerNum = useRef(1);
    const higherNum = useRef(100);

    const changeGuessedHandler = (direction) => {
        if ((direction === 'low' && guessedNum < props.chosenNumber) || (direction === 'more' && guessedNum > props.chosenNumber)) {
            Alert.alert('Wrong!', '', [{text: 'Try again'}]);
            return;
        }
        if (direction === 'low') {
            higherNum.current = guessedNum;
        } else {
            lowerNum.current = guessedNum;
        }
        const nextNum = generateNumberForGame(lowerNum.current, higherNum.current, guessedNum);
        setGuessedNum(nextNum);
    };

    return (
        <View style={styles.container}>
            <Text>Generated guess</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.numberText}>{guessedNum}</Text>
            </View>
            <Card style={styles.buttonsContainer}>
                <Button title='Lower' onPress={changeGuessedHandler.bind(this, 'low')} />
                <Button title='Greater' onPress={changeGuessedHandler.bind(this, 'more')} />
            </Card>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
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
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default GameScreen;
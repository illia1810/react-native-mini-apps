import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import Screen from './screens/Screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {userNumber ? <GameScreen chosenNumber={userNumber} /> : <Screen onStart={startGameHandler} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

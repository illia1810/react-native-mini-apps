import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ListItem from './components/ListItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const handleGoalAdding = (newGoal) => {
    if (newGoal.length === 0) {
      return;
    }
    setGoals([...goals, newGoal]);
  }

  const handleGoalDeleting= (selectedItem) => {
    setGoals(currentGoals => {
      return currentGoals.filter(item => item !== selectedItem)
    });
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <GoalInput onAddButtonPress={handleGoalAdding} />
        <FlatList
          data={goals}
          renderItem={({item, index}) => (
              <ListItem id={index} text={item} onDeleteItem={handleGoalDeleting} />
            )} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

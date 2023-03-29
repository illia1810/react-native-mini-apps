import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={() => props.onDeleteItem(props.id)}>
            <View style={styles.listItem}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: '#000',
        borderWidth: 1,
    },
});

export default ListItem;
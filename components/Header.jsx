import { View, Text, StyleSheet } from 'react-native';
import colors from '../const/colors';

const Header = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.PURPLE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
    },
});

export default Header;
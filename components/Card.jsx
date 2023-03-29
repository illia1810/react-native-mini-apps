import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={[props.customStyle, styles.card]}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
    },
});

export default Card;
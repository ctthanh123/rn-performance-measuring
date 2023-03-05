import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

interface ItemProps {
    data: any;
}

const componentName: React.FC<ItemProps> = ({ data }) => {
    return (
        <View style={styles.item}>
            <Image 
                source={{ uri: data?.url }}
                style={styles.img}
                resizeMode='contain'
            />
            <Text>{ data?.title }</Text>
        </View>
    );
};

export default componentName;

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        marginRight: 6,
    },
    item: {
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: 'center',
        marginTop: 12,
    },
});

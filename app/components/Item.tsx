import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

interface ItemProps {
    data: any;
    useFastImage: boolean;
}

const Item: React.FC<ItemProps> = ({ data, useFastImage = false }) => {
    if (useFastImage) {
        return (
            <View style={styles.item}>
                <FastImage 
                    source={{ uri: data?.url }}
                    style={styles.img}
                    resizeMode='contain'
                />
                <Text>{ data?.title }</Text>
            </View>
        );
    }

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

export default Item;

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

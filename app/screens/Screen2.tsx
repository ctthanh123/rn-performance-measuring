import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { CustomIcons } from 'react-native-rn-icons-library';
import { Item } from '../components';

const Screen2 = () => {
    const [albums, setAlbums] = useState([]);

    const getDatas = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const resJson = await response.json();
        setAlbums(resJson);
    };

    const renderItem = ({ item }: any) => <Item data={item} useFastImage />;

    const renderFlatlistItem = () => (
        <FlatList 
            data={albums}
            renderItem={renderItem}
            keyExtractor={(item: any) => `item_${item?.id}`}
            initialNumToRender={10}
        />
    );

    const onPress = () => {
        getDatas();
    }

    return (
        <View style={styles.container}>
            <Text>Trigger action call api</Text>
            <CustomIcons 
                name='avatarFireMan'
                size={26}
                labelRight='Press me!'
                onPress={onPress}
                tintColor='tomato'
            />
            {renderFlatlistItem()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Screen2;

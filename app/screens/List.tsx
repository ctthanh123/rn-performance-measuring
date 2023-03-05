import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { CustomIcons } from 'react-native-rn-icons-library';
import { Item } from '../components';

const List = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // getDatas();
    }, []);

    const getDatas = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const resJson = await response.json();
        setAlbums(resJson);
    };

    const renderMapItem = () => (
        <ScrollView>
            {
                albums?.map((item) => (<Item data={item} />))
            }
        </ScrollView>
    );

    const renderItem = ({ item }: any) => <Item data={item} />;

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
            <CustomIcons 
                name='like'
                size={26}
                tintColor='tomato'
                labelRight='Press me!'
                onPress={onPress}
            />
            {/* {renderFlatlistItem()} */}
            {renderMapItem()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default List;

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Item } from '../components';

const List = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);

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
            removeClippedSubviews={true}
            // maxToRenderPerBatch={10}
        />
    );

    return (
        <View style={styles.container}>
            <Text>Use Flatlist to render</Text>
            {renderFlatlistItem()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default List;

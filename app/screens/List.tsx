import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { CustomIcons } from 'react-native-rn-icons-library';

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

    const renderMapItem = () => {

    }

    const renderFlatlistItem = () => {

    };


    return (
        <View style={styles.container}>
            <CustomIcons 
                name='avatarHacker'
                size={56}
                labelRight='test nha'
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default List;

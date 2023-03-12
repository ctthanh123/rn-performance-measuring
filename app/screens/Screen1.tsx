import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Item } from '../components';

const Screen1 = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const resJson = await response.json();
        setAlbums(resJson);
    };

    const renderMapItem = () => (
        <ScrollView>
            {albums?.map((item) => (<Item data={item} useFastImage={false} />))}
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            <Text>Use map to render</Text>
            {renderMapItem()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Screen1;

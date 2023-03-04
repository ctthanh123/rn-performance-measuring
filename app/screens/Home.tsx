import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { stacks } from '../navigation/stacks';

const Home: React.FC<any> = ({ navigation }) => {
    const redirectToList = () => {
        navigation.navigate(stacks.main.list);
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle={'light-content'} backgroundColor='white' />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View style={styles.container}>
                    <TouchableOpacity style={[styles.btnList, { backgroundColor: 'tomato' }]}
                        onPress={redirectToList}
                    >
                        <Text style={styles.text}>Navigate to List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnList, { backgroundColor: '#00cec9' }]}>
                        <Text style={styles.text}>Navigate to Screen 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnList, { backgroundColor: '#74b9ff' }]}>
                        <Text style={styles.text}>Navigate to Screen 2</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    btnList: {
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
});

export default Home;

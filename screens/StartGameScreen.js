import React from 'react';
import {View,Text , StyleSheet, TextInput, Button} from 'react-native';
const StartGameScreen = props =>{
    return (
<View style={styles.screen}>
<Text>
    Start a new Game !
</Text>
</View>
    );
};
const styles=StyleSheet.create({
    screen : {
        flex :1,
        padding :10,
        alignItems:'center'
        
    }
});
export default StartGameScreen;
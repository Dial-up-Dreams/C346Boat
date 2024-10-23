import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const Boat = ({icon_name, name, description, BoatPic}) => {
    return (
        <View>
            <Text style={styles.title}>
                <Icon name={icon_name} size={20}/>
                {name}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={BoatPic} style={{width:300, height:200}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Boat;

import { View, Text } from "react-native-web";

const Test = () => {

    console.log(1)

    setTimeout( () => console.log(2), 2000 )  

    console.log(3)

    return (
        <View>
            <Text> Hello Test </Text>
        </View>
    )
}

export default Test
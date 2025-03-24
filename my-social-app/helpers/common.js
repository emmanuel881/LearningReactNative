//make the app responsive

import { Dimensions } from "react-native";

//get device width and hieght
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

//lets create a function that takes in a percentage value and it returns a value relative to the screen height
export const hp = percentage => {
    return (percentage * deviceHeight) / 100
}

//lets do the same for width
export const wp = percentage => {
    return (percentage * deviceWidth) / 100
}
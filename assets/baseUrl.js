import { Platform } from 'react-native'


let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'https://newapi1v2.herokuapp.com/v1/api/amazona'
: baseURL = 'http://192.168.18.5:7000/v1/api/amazona'
}

export default baseURL;

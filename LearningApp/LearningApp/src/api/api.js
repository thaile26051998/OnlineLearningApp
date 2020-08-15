import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const API_URL = "https://api.itedu.me/"

export default axios.create({
    baseURL: API_URL,
});

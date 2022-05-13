import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:5003/mycapstoneproject-1bc50/us-central1/api'
});

export default instance;
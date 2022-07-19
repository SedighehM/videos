import axios from "axios"
const KEY = "AIzaSyC0snQh6Lr-HMUNeLtXuHajT8vXZ20vXP8";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:5,
        key:KEY,
        type:"video"
    }

})

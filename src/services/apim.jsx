import axios from "axios";

const apim = axios.create({
    baseURL: "https://api.magicthegathering.io/v1/cards",
    
})

export default apim
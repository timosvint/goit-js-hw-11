import axios from "axios";



const SEARCH_URL = `https://pixabay.com/api/`;
const KEY_API = `50890358-614794b793de10968b1ca8154`

export default function getImagesByQuery(query){
    return axios({
        method: `get`,
        url: SEARCH_URL,
        params: {
            key: KEY_API,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    }).then(response => response.data)
}



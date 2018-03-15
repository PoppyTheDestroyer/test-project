import axios from "axios";

export default {
    getItem: () => {
        return axios.get(`/api/items/${id}`);
    }
}
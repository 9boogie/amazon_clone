import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-clone-f13de.cloudfunctions.net/api'
});

export default instance;
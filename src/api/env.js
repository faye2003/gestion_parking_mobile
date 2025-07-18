import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000/api/', // Remplace <TON_IP> par l’IP réelle de ta machine backend
  timeout: 5000
});

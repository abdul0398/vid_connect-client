import axios from 'axios';
const baseURL = process.env.API_BASE_URL;

const authURL = `${baseURL}/auth`

export const AUTH_API= axios.create({
  baseURL:authURL
});


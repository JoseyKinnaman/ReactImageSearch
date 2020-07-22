import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID WzkKv5toNn8epze6wM_se8a8GJQtRw_6_jFS-ucLHdU'
  }
});


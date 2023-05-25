import axios from 'axios';

const urlAPI = 'https://646badf57d3c1cae4ce4256f.mockapi.io/api/v1';

const todoAPI = {
  async getTodos() {
    try {
      const result = await axios.get(`${urlAPI}/todolists`);
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  async createTodo(data) {
    try {
      const result = await axios.post(`${urlAPI}/todolists`, data);
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  async deleteTodo(id) {
    try {
      const result = await axios.post(`${urlAPI}/todolists/${id}`);
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  async updateTodo(id, updated) {
    try {
      const result = await axios.put(`${urlAPI}/todolists/${id}`, updated);
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  async editTodo(id, edited) {
    try {
      const result = await axios.put(`${urlAPI}/todolists/${id}`, edited);
      return result;
    } catch (err) {
      console.log(err);
    }
  },
};

export default todoAPI;

import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const SUCCESS_FETCHING = 'SUCCESS_FETCHING';
const urlAPI = 'https://646badf57d3c1cae4ce4256f.mockapi.io/api/v1';

const startFetching = () => {
  return {
    type: START_FETCHING,
  };
};

const successFetchTodo = (payload) => {
  return {
    type: SUCCESS_FETCHING,
    payload,
  };
};

export const getTodo = () => {
  return async (dispatch) => {
    dispatch(startFetching());

    const result = await axios(`${urlAPI}/todolists`);
    console.log(result);

    dispatch(successFetchTodo(result.data));
  };
};

export const addTodo = (newTodo) => {
  return async (dispatch) => {
    await axios.post(`${urlAPI}/todolists`, newTodo);

    dispatch(getTodo());
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await axios.delete(`${urlAPI}/todolists/${id}`);

    dispatch(getTodo());
  };
};

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoAction';

const FormAdd = () => {
  const [inputTodo, setInputTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      title: inputTodo,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setInputTodo('');
  };
  return (
    <form className='flex items-center gap-4 mt-16 mb-8'>
      <input
        type='text'
        onChange={handleChange}
        placeholder='What to do'
        className='flex-1 h-[40px] border-2 border-slate-400 rounded-sm px-2'
      />
      <button
        onClick={handleSubmit}
        className='py-2 px-4 bg-indigo-400 hover:bg-indigo-500 rounded-sm text-white'
      >
        Add Todo
      </button>
    </form>
  );
};

export default FormAdd;

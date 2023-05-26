import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo, updateTodo } from '../redux/actions/todoActions';

const TodoForm = ({ isEditForm, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();

  const [inputTodo, setInputTodo] = useState('');
  const [editValue, setEditValue] = useState('');
  const [warning, setWarning] = useState({
    isDisplay: false,
    text: '',
  });

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleChangeInput = (e) => {
    setInputTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputTodo === '') {
      setWarning({
        isDisplay: true,
        text: 'Field tidak boleh kosong!',
      });
    } else {
      const newTodo = {
        id: Date.now(),
        todo: inputTodo,
        isDone: false,
      };

      dispatch(addNewTodo(newTodo));
      setInputTodo('');
      setWarning({
        isDisplay: false,
        text: '',
      });
    }
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    let todoEdited = {
      id: editTodo.id,
      todo: editValue,
      isDone: false,
    };
    console.log(todoEdited);
    dispatch(updateTodo(todoEdited));
  };

  return (
    <>
      {isEditForm === false ? (
        <form className='flex items-center gap-4 mt-16 mb-8'>
          <input
            type='text'
            onChange={handleChangeInput}
            value={inputTodo}
            placeholder='What to do'
            className='flex-1 h-[40px] border-2 border-slate-400 rounded-sm px-2'
          />
          <button
            onClick={handleAddTodo}
            type='submit'
            className='py-2 px-4 bg-indigo-400 hover:bg-indigo-500 rounded-sm text-white'
          >
            Add Todo
          </button>
        </form>
      ) : (
        <form className='flex items-center gap-4 mt-16 mb-8'>
          <input
            type='text'
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder='Edit your todo here!'
            className='flex-1 h-[40px] border-2 border-slate-400 rounded-sm px-2'
          />
          <button
            onClick={handleEditTodo}
            type='submit'
            className='py-2 px-4 bg-indigo-400 hover:bg-indigo-500 rounded-sm text-white'
          >
            Edit Todo
          </button>
          <button onClick={cancelUpdate}>Cancel</button>
        </form>
      )}

      {warning.isDisplay ? (
        <p className='text-rose-700 font-semibold'>{warning.text}</p>
      ) : null}
    </>
  );
};

export default TodoForm;

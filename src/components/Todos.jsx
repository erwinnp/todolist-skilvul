import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, deleteTodo, markTodo } from '../redux/actions/todoActions';
import ButtonFilter from './ButtonFilter';
import FormAdd from './FormAdd';
import TodoItem from './TodoItem';

const Todos = () => {
  const { todos } = useSelector((state) => state.todoReducer);
  const [inputTodo, setInputTodo] = useState('');
  const [warning, setWarning] = useState({
    isDisplay: false,
    text: '',
  });
  const dispatch = useDispatch();

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

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkTodo = (id) => {
    dispatch(markTodo(id));
  };

  const [sort, setSort] = useState('all');

  const handleAll = () => {
    setSort('all');
  };

  const handleActive = () => {
    setSort('active');
  };

  const handleCompleted = () => {
    setSort('completed');
  };

  return (
    <main className='w-full flex flex-col justify-center items-center mt-14'>
      <div className='flex flex-col gap-8 w-1/3'>
        <h1 className='text-3xl font-semibold text-center'>
          What's the plan for today?
        </h1>
        <div>
          <FormAdd
            handleChange={handleChangeInput}
            handleSubmit={handleAddTodo}
            inputValue={inputTodo}
          />
          {warning.isDisplay ? (
            <p className='text-rose-700 font-semibold'>{warning.text}</p>
          ) : null}
        </div>
        <div className='flex gap-6'>
          <ButtonFilter action={handleAll} name='All' />
          <ButtonFilter action={handleActive} name='Active' />
          <ButtonFilter action={handleCompleted} name='Completed' />
        </div>
        <div className='flex flex-col gap-6'>
          {todos.length <= 0 ? (
            <p>Todo is empty!</p>
          ) : sort === 'all' ? (
            todos.map((list, i) => (
              <TodoItem
                key={i}
                todoTitle={list.todo}
                todoStatus={list.isDone}
                actionDelete={() => handleDeleteTodo(list.id)}
                actionMark={() => handleMarkTodo(list.id)}
              />
            ))
          ) : sort === 'active' ? (
            todos.map(
              (list, i) =>
                list.isDone === false && (
                  <TodoItem
                    key={i}
                    todoTitle={list.todo}
                    todoStatus={list.isDone}
                    actionDelete={() => handleDeleteTodo(list.id)}
                    actionMark={() => handleMarkTodo(list.id)}
                  />
                )
            )
          ) : sort === 'completed' ? (
            todos.map(
              (list, i) =>
                list.isDone === true && (
                  <TodoItem
                    key={i}
                    todoTitle={list.todo}
                    todoStatus={list.isDone}
                    actionDelete={() => handleDeleteTodo(list.id)}
                    actionMark={() => handleMarkTodo(list.id)}
                  />
                )
            )
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Todos;

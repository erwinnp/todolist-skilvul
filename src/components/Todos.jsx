import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, deleteTodo, markTodo } from '../redux/actions/todoActions';
import ButtonFilter from './ButtonFilter';
import FormAdd from './FormAdd';
import TodoItem from './TodoItem';

const Todos = () => {
  const { todos } = useSelector((state) => state.todoReducer);
  const [inputTodo, setInputTodo] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInputTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      todo: inputTodo,
      isDone: false,
    };

    dispatch(addNewTodo(newTodo));
    setInputTodo('');
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
    <main className='w-screen flex flex-col justify-center items-center mt-14'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-3xl font-semibold'>What's the plan for today?</h1>
        <FormAdd
          handleChange={handleChangeInput}
          handleSubmit={handleAddTodo}
          inputValue={inputTodo}
        />
        <div className='flex gap-6'>
          <ButtonFilter action={handleAll} name='All' />
          <ButtonFilter action={handleActive} name='Active' />
          <ButtonFilter action={handleCompleted} name='Completed' />
        </div>
        <div className='flex flex-col gap-6'>
          {/* {todos?.map((list, i) => (
            <TodoItem
              key={i}
              todoTitle={list.todo}
              todoStatus={list.isDone}
              actionDelete={() => handleDeleteTodo(list.id)}
              actionMark={() => handleMarkTodo(list.id)}
            />
          ))} */}
          {sort === 'all' ? (
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
          ) : (
            <p>Todo is empty!</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Todos;

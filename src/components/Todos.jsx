import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chekedTodo, deleteTodo, getTodo } from '../redux/actions/todoAction';
import ButtonFilter from './ButtonFilter';
import FormAdd from './FormAdd';
import TodoItem from './TodoItem';

const Todos = () => {
  const { todos, isLoading } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheckedTodo = (id, done) => {
    const completed = { isDone: done };
    dispatch(chekedTodo(id, completed));
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
      <div className='flex flex-col gap-8'>
        <h1 className='text-3xl font-semibold'>What's the plan for today?</h1>
        <FormAdd />
        <div className='flex gap-6'>
          <ButtonFilter action={handleAll} name='All' />
          <ButtonFilter action={handleActive} name='Active' />
          <ButtonFilter action={handleCompleted} name='Completed' />
        </div>
        <div className='flex flex-col gap-6'>
          {isLoading ? (
            <p>Loading...</p>
          ) : sort === 'all' ? (
            todos.map((todo, index) => (
              <TodoItem
                key={index}
                todoStatus={todo.isDone}
                todoTitle={todo.title}
                removeTodo={() => handleDeleteTodo(todo.id)}
                toggleTodo={() => handleCheckedTodo(todo.id, !todo.isDone)}
              />
            ))
          ) : sort === 'active' ? (
            todos.map(
              (todo, index) =>
                todo.isDone === false && (
                  <TodoItem
                    key={index}
                    todoStatus={todo.isDone}
                    todoTitle={todo.title}
                    removeTodo={() => handleDeleteTodo(todo.id)}
                    toggleTodo={() => handleCheckedTodo(todo.id, !todo.isDone)}
                  />
                )
            )
          ) : sort === 'completed' ? (
            todos.map(
              (todo, index) =>
                todo.isDone === true && (
                  <TodoItem
                    key={index}
                    todoStatus={todo.isDone}
                    todoTitle={todo.title}
                    removeTodo={() => handleDeleteTodo(todo.id)}
                    toggleTodo={() => handleCheckedTodo(todo.id, !todo.isDone)}
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

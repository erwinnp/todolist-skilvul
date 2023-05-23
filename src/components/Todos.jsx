import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getTodo } from '../redux/actions/todoAction';
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

  return (
    <main className='w-full flex flex-col justify-center items-center mt-14'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-3xl font-semibold'>What's the plan for today?</h1>
        <FormAdd />
        <div className='flex gap-6'>
          <ButtonFilter name='All' />
          <ButtonFilter name='Active' />
          <ButtonFilter name='Completed' />
        </div>
        <div className='flex flex-col gap-6'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            todos.map((todo, index) => (
              <TodoItem
                key={index}
                todoStatus={todo.isDone}
                todoTitle={todo.title}
                removeTodo={() => handleDeleteTodo(todo.id)}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Todos;

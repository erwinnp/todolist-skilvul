import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../store/features/todoSlice';
import ButtonFilter from './ButtonFilter';
import FormAdd from './FormAdd';
import TodoItem from './TodoItem';

const Todos = () => {
  const dataTodo = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  console.log(dataTodo);

  return (
    <main className='w-screen flex flex-col justify-center items-center mt-14'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-3xl font-semibold'>What's the plan for today?</h1>
        <FormAdd />
        <div className='flex gap-6'>
          <ButtonFilter name='All' />
          <ButtonFilter name='Active' />
          <ButtonFilter name='Completed' />
        </div>
        <div className='flex flex-col gap-6'>
          {dataTodo.map((todo, index) => (
            <TodoItem
              key={index}
              todoStatus={todo.isDone}
              todoTitle={todo.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Todos;

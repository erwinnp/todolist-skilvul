import ButtonFilter from './ButtonFilter';
import FormAdd from './FormAdd';
import TodoItem from './TodoItem';

const Todos = () => {
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
          <TodoItem todoStatus={true} todoTitle='Todo 1' />
          <TodoItem todoStatus={true} todoTitle='Todo 2' />
          <TodoItem todoStatus={false} todoTitle='Todo 3' />
        </div>
      </div>
    </main>
  );
};

export default Todos;

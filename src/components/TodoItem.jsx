import { HiPencilAlt, HiTrash } from 'react-icons/hi';

const TodoItem = ({ todoStatus, todoTitle, actionDelete, actionMark }) => {
  return (
    <section className='flex justify-between items-center px-2 py-3.5 border-2 border-slate-300'>
      <div className='flex items-center gap-4'>
        <input
          type='checkbox'
          checked={todoStatus}
          onClick={actionMark}
          className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded'
        />
        {todoStatus ? (
          <label className='text-xl line-through'>{todoTitle}</label>
        ) : (
          <label className='text-xl'>{todoTitle}</label>
        )}
      </div>
      <div className='flex items-center gap-6'>
        <HiPencilAlt className='w-6 h-6 cursor-pointer' />
        <HiTrash onClick={actionDelete} className='w-6 h-6 cursor-pointer' />
      </div>
    </section>
  );
};

export default TodoItem;

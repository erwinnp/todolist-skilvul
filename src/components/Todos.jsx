import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, markTodo } from '../redux/actions/todoActions';
import ButtonFilter from './ButtonFilter';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Todos = () => {
  const { todos } = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodoState, setEditTodoState] = useState('');

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodoState(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
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
          <TodoForm
            isEditForm={editFormVisibility}
            editTodo={editTodoState}
            cancelUpdate={cancelUpdate}
          />
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
                actionEdit={() => handleEditClick(list)}
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
                    actionEdit={() => handleEditClick(list)}
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
                    actionEdit={() => handleEditClick(list)}
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

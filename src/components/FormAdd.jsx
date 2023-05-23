const FormAdd = ({ handleSubmit, handleChange, inputValue }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center gap-4 mt-16 mb-8'
    >
      <input
        type='text'
        onChange={handleChange}
        value={inputValue}
        placeholder='What to do'
        className='flex-1 h-[40px] border-2 border-slate-400 rounded-sm px-2'
      />
      <button
        type='submit'
        className='py-2 px-4 bg-indigo-400 hover:bg-indigo-500 rounded-sm text-white'
      >
        Add Todo
      </button>
    </form>
  );
};

export default FormAdd;

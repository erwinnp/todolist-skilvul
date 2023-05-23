const ButtonFilter = ({ name }) => {
  return (
    <button className='py-2 px-3.5 bg-slate-400 rounded-md text-white hover:bg-blue-300 focus:bg-blue-500'>
      {name}
    </button>
  );
};

export default ButtonFilter;

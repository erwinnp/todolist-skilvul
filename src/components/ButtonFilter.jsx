import PropTypes from 'prop-types';

const ButtonFilter = ({ name, action }) => {
  return (
    <button
      onClick={action}
      className='py-2 px-3.5 bg-slate-400 rounded-sm text-white hover:bg-blue-300 focus:bg-blue-500'
    >
      {name}
    </button>
  );
};

ButtonFilter.propTypes = {
  name: PropTypes.string,
  action: PropTypes.func,
};

export default ButtonFilter;

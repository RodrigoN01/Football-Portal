import spinner from '../assets/img/spinner.gif';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={spinner} alt='Loading...' />
    </div>
  );
};

export default Loader;

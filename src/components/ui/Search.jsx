import { useContext } from 'react';
import AppContext from '../../Context';
import { useState } from 'react';

const Search = () => {
  const { queryFunction } = useContext(AppContext);
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    queryFunction(q);
  };
  return (
    <section className='search'>
      <form>
        <input
          value={text}
          type='text'
          className='form-control'
          placeholder='Search Characters'
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;

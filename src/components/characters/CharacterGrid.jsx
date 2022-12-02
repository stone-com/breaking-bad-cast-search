import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';
import { useContext } from 'react';
import AppContext from '../../Context';

const CharacterGrid = () => {

  const {items, isLoading} = useContext(AppContext)
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem item={item} key={item.char_id}>
          {item.name}
        </CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;

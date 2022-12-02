import CharacterItem from './CharacterItem';
const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
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

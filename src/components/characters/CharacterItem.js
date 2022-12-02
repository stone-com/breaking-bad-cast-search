const CharacterItem = ({ item }) => {
  console.log(item);
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation.join(', ')}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Breaking Bad Season Appearances:</strong>{' '}
              {item.appearance.length ? item.appearance.join(', ') : 'None'}
            </li>
            <li>
              <strong>Better Call Saul Season Appearances:</strong>{' '}
              {item.better_call_saul_appearance.length
                ? item.better_call_saul_appearance.join(', ')
                : 'None'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;

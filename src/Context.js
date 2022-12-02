import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const queryFunction = (q) => {
    setQuery(q);
  };

  return (
    <AppContext.Provider value={{ items, isLoading, queryFunction }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

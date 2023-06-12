import { createContext, useContext } from 'react';

const MyContext = createContext();

export function MyContextProvider() {
  return (
    <MyContext.Provider value={100}>
      <TryContext />
    </MyContext.Provider>
  )
}

export function TryContext() {
  const data = useContext(MyContext);
  return <div>{data}</div>
}

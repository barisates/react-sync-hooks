import { useState, useEffect } from "react";

interface IStorage {
  state: any;
  callback: (state: any) => void;
}

const usePromiseState = (initialState: any) => {
  const [storage, setStorage] = useState<IStorage>({
    state: initialState,
    callback: () => { return; },
  });

  const setPromiseState = ( value : any, callback: () => void = () => { return; } )  => {
    setStorage({ state: value, callback });
  };

  useEffect(() => {
    storage.callback(storage.state);
  }, [storage]);

  return [storage.state, setPromiseState];
}

export default usePromiseState;
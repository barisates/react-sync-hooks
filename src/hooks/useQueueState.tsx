import { useState, useEffect, useRef } from "react";

const useQueueState = (initialState: any) => {
  const [state, setState] = useState(initialState);
  const storage: { isSet: boolean, stateQueue: Array<any> } = useRef({
    isSet: true,
    stateQueue: []
  }).current;

  const setQueueState = (value: any) => {
    if (storage.isSet) {
      storage.isSet = false;
      setState(value(state));
    } else if (!storage.isSet) {
      storage.stateQueue.push(value);
    }
  };

  useEffect(() => {
    if (!storage.isSet) {
      storage.isSet = true;
      if (storage.stateQueue.length > 0) {
        setQueueState(storage.stateQueue[0]);
        storage.stateQueue.shift();
      }
    }
  }, [state]);

  return [state, setQueueState];
};

export default useQueueState;
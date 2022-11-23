# react-sync-hooks
Useful hooks you can use in asynchronous processes.

# usePromiseState

You can get the callback after the update is complete without using useEffect on state updates. In this way, it simplifies management in consecutively State updates.


#### Basic Usage

```javascript
import { usePromiseState } from "react-sync-hooks";

export default function App() {
  const [promiseState, setPromiseState] = usePromiseState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setPromiseState(
            1,
            // Triggered when state is updated.
            (s: any) => {
              console.log("State Updated:  " + s);
            }
          );
        }}
      >
        Set Promise State: {promiseState}
      </button>
    </div>
  );
}
```

# useQueueState

It provides a synchronous update of state updates that occur asynchronously by queuing them.

#### Basic Usage

```javascript
import { useQueueState } from "react-sync-hooks";

export default function App() {
  const [queueState, setQueueState] = useQueueState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          // Queues concurrent updates
          setQueueState((s: any) => s + 1);
          setQueueState((s: any) => s + 1);
          setQueueState((s: any) => s + 1);
        }}
      >
        Set Queue State: {queueState}
      </button>
    </div>
  );
}
```

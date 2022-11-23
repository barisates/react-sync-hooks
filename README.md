# react-sync-hooks
Useful hooks you can use in asynchronous processes.

# usePromiseState

State güncellemlerinde useEffect kullanmadan, güncelleme tamamlandıktan sonra geri bildirimi alabilirsiniz. Bu sayede ardışık State güncellemelerinde yönetimi kolaylaştırır.


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

Asenkron bir biçimde gerçekleşen state güncellemelerini kuyruklayarak senkron bir biçimde güncellenmesini sağlamaktadır.


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

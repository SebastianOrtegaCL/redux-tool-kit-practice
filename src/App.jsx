import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementBy} from "./store/slices/counter/index.js";

function App() {
    const counter = useSelector((state) => { state.counter.value} )
    const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <button onClick={ () => dispatch( increment() )}>
          Increment { counter }
        </button>
          <button type='button' onClick={ () => dispatch(decrement()) }>
              Decrement
          </button>
          <button type='button' onClick={ () => dispatch(incrementBy(2)) }>
              Increment by 2
          </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

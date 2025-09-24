import { useCounter } from "../context/useCounter";

const Counter: React.FC  = () => {
  const {state,dispatch} = useCounter()
  return (
    <>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Rest</button>
    </>
  )
}

export default Counter;
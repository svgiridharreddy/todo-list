export type State = {counter: number}

export type Action  = {type: 'increment'} | {type: 'decrement'} | {type: 'reset'}

export const counterReducer = (state: State, action: Action): State =>{
  switch (action.type) {
    case 'increment':
      return {counter: state.counter  + 1}
    case 'decrement':
      if(state.counter  === 0) return {counter: 0};
      return {counter: state.counter  - 1}
    case 'reset':
    return {counter: 0}
    default:
      return state
  }
}

export const initialStateCounter: State = {counter: 0}

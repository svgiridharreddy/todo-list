import React, { useReducer,type ReactNode} from 'react';
import { CounterContext } from './CounterContext';
import { counterReducer, initialStateCounter} from './CounterReducer';

type Props  = {
  children: ReactNode
}

export const CounterProvider: React.FC<Props> = ({children}) => {
  const [state,dispatch] = useReducer(counterReducer,initialStateCounter)
  return(
    <CounterContext.Provider value ={{state,dispatch}}>
      {children}
    </CounterContext.Provider>
  )
}


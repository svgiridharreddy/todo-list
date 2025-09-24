import React, { createContext } from "react";
import { type State, type Action} from './CounterReducer'
type CounterContextType  = {
  state: State;
  dispatch: React.Dispatch<Action>
}

export const CounterContext  = createContext<CounterContextType | undefined>(undefined)

// type Props  = {
//   children: ReactNode
// }
// export const CounterProvider: React.FC<Props> = ({children}) => {
//   const [state,dispatch] = useReducer(counterReducer,initialStateCounter)
//   return(
//     <CounterContext.Provider value ={{state,dispatch}}>
//       {children}
//     </CounterContext.Provider>
//   )
// }


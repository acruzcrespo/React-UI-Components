import React, { useReducer} from 'react';
import './App.css';
import Calculator from './components/DisplayComponents/CalculatorDisplay'

const initialState = {display: '0'}


export default function App(props) {
  const [state, dispatch] = useReducer(displayReducer, initialState)
  
  return (
    <div className="app">
      <Calculator 
        display={state.display}
        reset={() => dispatch(acReset())} 
        append={str => dispatch(acAppend(str))} 
        calculate={() => dispatch(acCalculate())}   
      />
    </div>
    )
}

// ---- Action creators ----
// Note: "ac" = action creator 

function acReset() {
  return { type: 'RESET' } 
} 

function acAppend(str) {
  return { type: 'APPEND_CALCULATION', payload: str } 
}

function acCalculate() {
  return { type: 'PERFORM_CALCULATION' }  
}


// ---- Reducer (callback for useReducer) ----


function displayReducer(state, action) {
  console.log(action)
  switch(action.type.toUpperCase()) {
    case 'APPEND_CALCULATION': 
      return { display: state.display + action.payload } 
    case 'RESET':
      return initialState
    default: 
      return state
  }
}


// const App = () => {
//   return (
//     <div>
//       <h3>Welcome to React Calculator</h3>
//       <p>
//         We have given you a starter project. You'll want to build out your
//         components in their respective files, remove this code and replace it
//         with the proper components.
//       </p>
//       <p>
//         <strong>
//           Don't forget to `default export` your components and import them here
//           inside of this file in order to make them work.
//         </strong>
//       </p>
//     </div>
//   );
// };

// export default App;

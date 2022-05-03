import logo from './logo.svg';
import './App.css';
import AlertManager from './components/AlertManager';
import AlertExample from './components/AlertExample';
import useAlertReducer from './redux/AlertReducer';
import { useReducer } from 'react';
import state from './data/data';
import { v4 as uuid } from 'uuid';
import { Grid, Box } from '@material-ui/core';

function App() {
   
   const [currentState, dispatch] = useReducer(useAlertReducer, state);

   const deleteAlert = (uuid) => {
      return dispatch({type: 'DELETE', payload: {uuid}});
   };
   
   const addAlert = async (title, text, link, timeout, type) => {
       const unique_id = uuid();
      
       const seconds = parseInt(timeout, 10);
       timeout = timeout == '' ||  isNaN(seconds) ? 10 : seconds;
       await dispatch({type: 'ADD', payload: {unique_id, type, text, title, timeout, link}});

       setTimeout(() => (deleteAlert(unique_id)), timeout*1000);      

   };


  return (
    <div className="App">
       <div className="dashboard">
         <div />
         <div  className="center-dashboard">
           <AlertExample
             dispatch={addAlert}
           /> 
         </div>
         <div className="manager-dashboard">
           <AlertManager
               state={currentState}      
           />
         </div>
       </div>
    </div>
  );
}

export default App;

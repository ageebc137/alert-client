import { useEffect } from 'react';
import AlertComponent from './AlertComponent';

function AlertManager({state}) {
   
   return (
     <>
     <ul>
      {state.alerts.map((alert, i) => (
         <AlertComponent
           id={alert.uuid}
           title={alert.title} 
           text={alert.text}
           link={alert.link}
           timeout={alert.timeout}
           type={alert.type}
         />
      ))}
      </ul>
     </>
   );

}

export default AlertManager;

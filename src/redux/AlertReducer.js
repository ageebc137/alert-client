import { v4 as uuid } from 'uuid';


const ADD_ALERT = 'ADD';
const DELETE_ALERT = 'DELETE';

function useAlertReducer(state, action) {
   switch (action.type) {
      case ADD_ALERT: {

         console.log('Alert was added');

         const newAlert = {
           id: action.payload.unique_id,
           title: action.payload.title,
           text: action.payload.text,
           link: action.payload.link,
           type: action.payload.type,
           timeout: action.payload.timeout,
         }      
         return {
             ...state,
             alerts: [...state.alerts, newAlert ],
         };
      }
      case DELETE_ALERT: {
         console.log('Alert deleted');
         console.log(action.payload.uuid);
         console.log(state.alerts.filter(alert => alert.id !== action.payload.uuid));
         return {
           ...state,
           alerts: [...state.alerts.filter( alert => alert.id !== action.payload.uuid)]
         };
      }
      default:
         throw new Error();
   }

}


export default useAlertReducer;

import {List, ListItem, ListItemText, Link } from '@material-ui/core'; 
import { Alert, AlertTitle } from '@material-ui/lab';


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function AlertComponent({id, title, text, type, link, timeout}) {
   
   
    return (
           <Alert severity={type}>
               <AlertTitle> {title}</AlertTitle>
               <List>
                 <ListItemText primary={text} />
                 <ListItemText primary={timeout} />
                 <Link href={link} target="_blank" >{link}</Link>
               </List>
           </Alert>
    );

}

export default AlertComponent;

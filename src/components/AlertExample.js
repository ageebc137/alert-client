import { TextField, 
         Select,
         MenuItem,
         Button } from '@material-ui/core';
import { useState } from 'react';


function AlertExample (props) {

   const [title, setTitle] = useState('');
   const [text, setText] = useState('');
   const [link, setLink] = useState('');
   const [type, setType] = useState('');   
   const [timeout, setTimeout] = useState('');
   
   const handleTitle = (event) => { setTitle(event.target.value); };
   const handleText = (event) => { setText(event.target.value); };
   const handleLink = (event) => { setLink(event.target.value); };
   const handleType = (event) => { setType(event.target.value); };   
   const handleTimeout = (event) => { setTimeout(event.target.value); };


   return (
       <form>
          <div>
           <TextField 
               required
               id="title-alert" 
               label="Title" 
               value={title} 
               onChange={handleTitle}/>
          </div>
          <div>
           <TextField 
                required
                id="text-alert" 
                label="Text"
                value={text}
                onChange={handleText}
           />
          </div>
          <div>
           <TextField 
                required
                id="link-alert" 
                label="Link"
                value={link}
                onChange={handleLink}
           />
          </div>
          <div>
           <TextField 
                required
                id="timeout-alert" 
                label="Timeout"
                value={timeout}
                onChange={handleTimeout}
           />
          </div>
          <div>
              <Select 
                required
                labelId="select-type-alert-label"
                id="type-alert"
                value={type}
                onChange={handleType}   
              >
               <MenuItem value={'error'}>error</MenuItem>
               <MenuItem value={'warning'}>warning</MenuItem>
               <MenuItem value={'info'}>info</MenuItem>
               <MenuItem value={'success'}>success</MenuItem>
              </Select>
           </div> 
           <Button
              variant="contained"
              color="primary"
              onClick={() => props.dispatch(title, text, link, timeout, type)}
           >
            Save
           </Button> 
       </form>
   );

}

export default AlertExample;


import {VscGlobe} from 'react-icons/vsc';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { CircularProgress } from '@mui/material';


export const Post = () =>{return<>

     <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
    }}>

        <VscGlobe/>
        Traer Datos
    </button>
    <Button variant='outlined' color='error'>Hola Mundo</Button>
    <Alert severity='error'>Error error error</Alert>
    <Alert severity='warning'>Error error error</Alert>
    <Alert severity='info'>Error error error</Alert>
    <Alert severity='success'>Error error error</Alert>
    <CircularProgress></CircularProgress>
</>
}
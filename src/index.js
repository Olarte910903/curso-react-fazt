import React from "react";
import ReactDOM from "react-dom/client";
import { Componente, Button } from "./Componente";
import { TaskCard } from "./Task";
import{Saludar} from './Saludar';
import {Post} from './Posts';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Button text="Started" />
    <Button text="Paused"/>
    <Button text="Start" name="Miguel"/>
    <Componente
      name="Miguel"
      lastName="Olarte"
      document={1094922554}
      random={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    />
    <Componente name="Diego" lastName="Olarte" document={1094922554} />
    <Componente name="Carolina" lastName="Tabares" document={1094922554} /> */}

    {/* <TaskCard ready={false}/>
    <Saludar/> */}

    <Post/>
  </>
);

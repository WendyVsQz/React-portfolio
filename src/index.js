// createRoot react18

import { createRoot } from 'react-dom/client';
import App from './App'
import "./index.css";

// root> home
const container = document.getElementById('root');
const root = createRoot(container, <App tab="home"/>);

root.render(<App/>)

/* 
    OLD VERSION  

import  ReactDOM  from "react-dom";
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root")); */
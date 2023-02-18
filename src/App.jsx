import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-styles.scss';
import Todo from './component/todoListCard';

function App() {
  const [count, setCount] = useState(0)
  const list = { now: [{name:"Clean Room",tag:"Home"}, {name:"SW Homework",tag:"Uni"}], later: [{name:"HID Homework",tag:"Uni"}] }
  return (
    <>
      <Todo list = {list}/>
      
    </>
  );
}

export default App

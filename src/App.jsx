import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-styles.scss';
import Todo from './component/todoListCard';
import ToDoModal from './component/addToDoModal';

function App() {
  const [count, setCount] = useState(0)
  const list = { now: ["Clean Room", "Sw Homework"], later: ["HID Homework"] }
  return (
    <>
      <Todo list = {list}/>
      <ToDoModal/>
    </>
  );
}

export default App

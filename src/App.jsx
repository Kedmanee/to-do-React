import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-styles.scss';
import Todo from './component/todoListCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo/>
    </>
  );
}

export default App

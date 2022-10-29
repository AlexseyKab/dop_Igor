import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

type ShowType = {
  completed: boolean
  id: number
  title: string
  userId: number
}

function App() {

  const [show, setShow] = useState<Array<ShowType>>([])

  const useShowUp = () => {

      fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(json => setShow(json))

  }

  const clearMeHandler = () => {
      setShow([])
  }

  return (
    <div className="App">
      <Button name={'Show me'} callback={useShowUp}/>
      <Button name={'Clear me'} callback={clearMeHandler}/>
      <ul>
        {
          show.map(el => {
            return (
            <li key={el.id}>
              <input type="checkbox" checked={el.completed}/>
              <span>{el.title}</span>
              <span>{el.userId}</span>
            </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;

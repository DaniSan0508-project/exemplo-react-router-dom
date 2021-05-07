
import React, { useState } from 'react';
import './App.css';

function App(){
  const[tarefas,setTarefas] = useState(['Estudar Hooks','Fazer compras'])
  const[input,setInput] = useState('Digite o valor a adicionar na lista')

  function handleAdd(){
    setTarefas([...tarefas,input])
  }
  function addInput(e){
    let value = e.target.value
    setInput(value)
  }

return(
  <div>
    {
      tarefas.map(tarefa=>(<h1 key={tarefa}>{tarefa}</h1>))
      
    }
    <input type="text" value={input} onChange={addInput}/>
    <button onClick={handleAdd}>Adicionar</button>
  </div>
)

}
export default App;

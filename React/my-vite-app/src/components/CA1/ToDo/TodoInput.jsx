import React from 'react'

const TodoInput = ({onAdd}) => {
    const [InputList, setInputList] = useState('');

    const handleAdd = () => {
        if(InputList.trim()){
            onAdd(InputList)
            setInputList('');
        }
    }
  return (
    <div>
        <h2>Task Planner</h2>
        <input type="text" placeholder='Your Todos....' value={InputList} onChange={(e) => e.target.value}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput
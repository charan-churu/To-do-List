import React, { useState } from 'react'
import './Todo.css'
function Todo() {
  const [inputText,setInputText]=useState('')
  const [data,setData]=useState([])
  const [ischecked,setIschecked]=useState({})

  const handleInputText=(e)=>{
    setInputText(e.target.value)
    
  }
  const handleData=()=>{
    setData([...data,inputText])
    setInputText('')
  }
  function toggleText(index){
    setIschecked(prevState=>({...prevState,[index]:!prevState[index]}))
  }
  const handleDelete=(index)=>{
    const updateditems=[...data]
    updateditems.splice(index,1)
    setData(updateditems)
  }
  return (
    <div className='body'>
      <div className='head'>
        <h1>My To Do List</h1>
        <input type="text" value={inputText} placeholder='Title...' onChange={handleInputText} className='textbox'/>
        <button className='Add' onClick={handleData}>Add</button>
      </div>
      <div className='foot'>
        {data.map(
          (item,index)=> 
            <li key={index}>
              <table>
                <tr  style={{ backgroundColor: index % 2 === 0 ? '#04AA6D' : '#ffffff' }}>
                  <td> <input type="checkbox" checked={ischecked[index] || false} onChange={()=>toggleText(index)} /> </td>
                  <td className='output'>{ischecked[index]? <del>{item}</del>:item} </td>
                  <td><button style={{ backgroundColor: index % 2 === 0 ? '#04AA6D' : '#ffffff' }} className='delete' onClick={()=>handleDelete(index)}>X</button></td>
                </tr>
              </table>
            </li>  
          )}
      </div>
    </div>
  )
}

export default Todo


import React,{useState} from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'
import Alert from '@material-ui/lab/Alert'
function AddTask(props) {
    const[isSaved,setIsSaved]=useState(false)
const {addItem}=props
    const formSubmit=(task)=>{
        axios.post('http://localhost:3033/api/tasks',task)
        .then((response)=>{
            const result=response.data
            addItem(result);
            setIsSaved(true);
            <Alert variant="filled" severity="success">Task added successfully</Alert>
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    const toggleIsSaved=()=>{
        setIsSaved(false)
    }
    return (
        <div>
            <h2>Add Task</h2>
            <TaskForm 
            formSubmit={formSubmit} 
            isSaved={isSaved}
            toggleIsSaved={toggleIsSaved}
            />
            
        </div>
    )
}

export default AddTask

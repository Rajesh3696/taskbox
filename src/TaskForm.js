import React, { useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import { Button } from '@material-ui/core'
import Save from '@material-ui/icons/Save'

function TaskForm(props) {
    const {formSubmit,isSaved,toggleIsSaved,id: slNo,title: tasktitle,status: taskstatus}=props
    const [id,setId]=useState(slNo ? slNo : uuidv4())
    const [title, setTitle] = useState(tasktitle ? tasktitle: '')
    const [status, setstatus] = useState(taskstatus ? taskstatus:false)
    
    useEffect(()=>{
        if(isSaved){
            setId(uuidv4())
            setTitle('')
            setstatus(false)
            toggleIsSaved()
        }
    },[isSaved,toggleIsSaved])

    const handletitlechange = (e) => {
        setTitle(e.target.value)
    }

    const handlestatuschange = (e) => {
        setstatus(e.target.checked)
    }

    const handleSubmit=(e)=>{
            e.preventDefault()
            const fromData={
                id:id,
                title:title,
                status:status
            }
           formSubmit(fromData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input type="text"
                    value={title}
                    onChange={handletitlechange} /> <br />
                <input type="checkbox" 
                checked={status} 
                onChange={handlestatuschange} /><label>completed</label><br/>
                <input type='submit' value='save'/>
            </form>
        </div>
    )
}

export default TaskForm

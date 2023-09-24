import React from "react";
import Tooltip from '@mui/material/Tooltip';

const ToDoListComp=(props)=>{

  
return (
<>
<div className="todo_style"> 

<Tooltip title="Delete"> 
{/* to show delete or anything written under "", while hover tooltip is used */}
<i className="fa fa-times" aria-hidden="true" onClick={()=>{
    props.onSelect(props.id)
}}></i>
</Tooltip>

<li>{props.text}</li>

<Tooltip title="Edit">
<i className="fa fa-pencil" arial-hidden="true" onClick={()=>{props.onEdit(props.id)}}/>
</Tooltip>
</div>
</>
);

};

export default ToDoListComp;
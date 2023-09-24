import React, { useState } from "react";
import ToDoListComp from "./ToDoListComp";

 //material ui icons
 import Tooltip from '@mui/material/Tooltip';


const ToDoListApp=()=>{

const[item,setitem]=useState("");
const[itemslist,setitemslist]=useState([]); 

const itemEvent=(e)=>{
setitem(e.target.value);
};


const addlist=()=>{
 
  if(item!==""){
    
if(!toggleBtn){
 setitemslist(
  itemslist.map((arElem)=>{
    if(arElem.id===isEdit){
      return {...arElem,name:item};
    }
    return arElem;
  })
 )


upisEdit(null);
 updTogBtn(true);
}

else{
const allinput={id:new Date().getTime().toString(),name:item}
 setitemslist([...itemslist,allinput]);                 // oldItems are previously itemslist stored in array

 
}
setitem("");
  }
};

const[toggleBtn,updTogBtn]=useState(true);
const[isEdit,upisEdit]=useState(null);

const deleteItems=(index)=>{

  // const updateitem=itemslist.filter((arrElem)=>{
  //   return index !==arrElem.id;
  // }); 
// setitemslist(updateitem);

setitemslist(
  itemslist.filter((arEle)=>{
    return index!==arEle.id;
  })
)
};

const editItem=(id)=>{

updTogBtn(false);

let newEditItem=itemslist.find((arrEle)=>{
return arrEle.id===id
});

setitem(newEditItem.name); // element to input place me laana

upisEdit(id)

};

return(
    <>
<div className="main_div">
    <div className="centre">
        <header>ToDo List</header>
        <br/>
        <div className="inputpart">
        <input type="text" placeholder="Add An Item" value={item} onChange={itemEvent} />
       
       {toggleBtn ? <Tooltip title="Add"><button onClick={addlist}>+</button>
       </Tooltip>:<Tooltip title="Update"> <i className="fa faa fa-pencil" onClick={addlist}/></Tooltip>}                                                            {/* to show delete or anything written under "", while hover tooltip is used */}
       </div>
        
     

     <ol>

       { itemslist.map((itemval)=> {
return <ToDoListComp key={itemval.id}
 id={itemval.id}
 text={itemval.name}
  onSelect={deleteItems}
  onEdit={editItem}
 />;
        })}
      </ol> 
        

     

    </div>
</div>
    </>
);

};

export default ToDoListApp;

handleaddtask=()=>{
    const task= document.getElementById("showtask").value
    if(task ==""){
        document.getElementById("showtask").value=document.getElementById("task1").value
        document.getElementById("task1").value=""
    }
    else{
        document.getElementById("showtask").value=task+"\n"+document.getElementById("task1").value
        document.getElementById("task1").value=""
    }

}

handlenexttask=()=>{
    let newtask=document.getElementById("showtask").value.split("\n")
    document.getElementById("task2").value=newtask[0]
    newtask.shift()
    document.getElementById("showtask").value=newtask.join("\n")

}
   
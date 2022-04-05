document.querySelector("#push").onclick = function()
{
   // alert("hello");
    let task=document.querySelector(".new_task").value;
    if(!task)
    {
        alert("plz add task");
    }
    else{
       // document.querySelector(".task_box").textContent=task;
        document.querySelector(".task_box").innerHTML+=`
        <div class="taskadd">
        ${document.querySelector(".new_task").value}
        <button class="delete" onclick="alert("hello")" type="button" >❌ DEL</i></button>
        </div>
        `;
        let current_task=document.querySelectorAll(".delete");
        for(let i=0;i<current_task.length;i++)
        {
            current_task[i].onclick=function(e){
               // this.parentNode.remove();
               e.target.parentNode.remove();
            }
        }
        let edit_task=document.querySelectorAll(".taskadd");
        for(let i=0;i<edit_task.length;i++)
        {
            edit_task[i].onclick=function(){
              
              this.classList.toggle('completed');

            }
        }
        document.querySelector(".new_task").value=" ";


    }
}
let msg=document.getElementById("addtasks");
let button=document.getElementById("push");
let textbox=document.getElementById("text_input");
textbox.addEventListener("keyup",function(event){
    if(event.keyCode===13)
    {
        button.click();
    }

});
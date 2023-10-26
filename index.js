$(document).ready(function() {

    const taskInput= $("#taskInput");
    
    const addBtn= $("#addBtn");
    
    const taskList=$("#taskList");
   
    const doneBtn=$(".done");

    const delBtn=$(".delete");
    
    
    addBtn.click(()=>{
       var content =taskInput.val().trim();
        
       if(content=="")
            alert("Please enter a task");
        else
        {
            const item=`<li>
                        <p> ${content}</p>
                        <div>
                        <button class="done">Done</button>
                        <button class="delete">Delete</button> 
                        </div>
                        </li>`;

            taskList.append(item);

            taskInput.val("");
        }
   });


   taskList.on("click", ".done", function() {
    const listItem = $(this).closest("li");
    listItem.toggleClass("completed");
});

    taskList.on("click", ".delete", function() {
     const listItem = $(this).closest("li");
     listItem.toggleClass("deleted");
     listItem.fadeOut(1000, ()=> {
        listItem.remove();
    });
});
 



  });


const tasks = [];
printTasklist();
console.log(tasks)

document.getElementById("addtask").addEventListener("click",function(){
    addTask();
});

function addTask(){
    var taskname= document.getElementById("txtNewtask").value;
    var taskResponsible= document.getElementById("txtResponsible").value;
    let task = {name: taskname, responsible: taskResponsible, isDone:false}
    tasks.push(task);
    printTasklist();
}

function printTasklist(){
    document.getElementById("tasklist").innerHTML= getHTMLtasks();
    
}
function markTask(element){
    let index = element.attributes['data-index'].value;
    let isChecked = element.checked;
    tasks[index].isDone = isChecked;
    printTasklist();
}

function getHTMLtasks(){
    let html = "";
    let index = 0;
    tasks.forEach(element => {
        let checked="";
        if(element.isDone){
            checked="checked";
        }
        html += "<li><input onClick='markTask(this)' name = 'checkbox' data-index='" + index + "'type='checkbox'" + checked + ">" +element.name + "&nbsp;" + "|"  + "&nbsp;"  + "Responsible: "+  element.responsible  + "&nbsp;" + index+ "</li>";
        index++;
    });
    return html;
}
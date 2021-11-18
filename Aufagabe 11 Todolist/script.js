var task1 = {name:"Wand streichen", responsible:"Moritz",isDone: true,};
var task2 = {name:"Tv-Halterung anbringen", responsible:"Moritz",isDone: true,};




const tasks = [task1,task2];
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

function getHTMLtasks(){
    let html = "";
    tasks.forEach(element => {
        html += "<li>" + element.name + "&nbsp;" + "|"  + "&nbsp;"  + "Responsible: "+  element.responsible  + "&nbsp;" +"Is It Done?: " + element.isDone + "&nbsp;" + "</li>";
    });
    return html;
}
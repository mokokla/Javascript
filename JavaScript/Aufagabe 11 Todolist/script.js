var task1 = {name="Wand streichen", isDone= true,responsible="Moritz"};
var task1 = {name="Tv-Halterung anbringen", isDone= true,responsible="Moritz"};

const tasks = ["putzen","tanzen","kochen"];
printTasklist();


document.getElementById("addtask").addEventListener("click",function(){
    var newTask= document.getElementById("txtNewtask").value;
    tasks.push(newTask);
    printTasklist();
});

function printTasklist(){
    document.getElementById("tasklist").innerHTML= getHTMLtasks();
    
}

function getHTMLtasks(){
    let html = "";
    tasks.forEach(element => {
        html += "<li>" + element + "</li>";
    });
    return html;
}
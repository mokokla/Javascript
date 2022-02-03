function registerEvents(){
    document.getElementById("loadtodo").addEventListener("click",function(){
        getTodos();
    })
}
function getTodos(){
    fetch()
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        data.forEach(element =>{
            console.log(element);
        })
    })
    .catch(function(err){
        console.log(err);
    }) 
}

registerEvents();
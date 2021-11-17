function WriteXO(){
    for(var s=0;s<2;s++){  
    for(var i=0;i<4;i++){
        document.write("X")
    }
    document.write("<br>")
    for(var i=0;i<5;i++){
        document.write("O")
    }
    document.write("<br>")
}
}
function WriteNumbersFrom1to100(){
    for(var i=0;i<=100;){
        document.write(i +"<br>")
        i+=2
}
}
function WriteBeginningLetter(){
    for(var s=1;s<=2;s++){
    for(var i=1;i<=2;i++){
            document.write("*")
    }
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
   
}

document.write("<br>")
document.write("*  "+ "&nbsp;")
for(var i=1;i<=2;i++){
    document.write("*")
}
document.write("&nbsp;&nbsp;*")
document.write("<br>")

for(var t=1;t<=2;t++){
for(var i=1;i<=2;i++){
    document.write("*")
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
}
document.write("<br>")
}

}




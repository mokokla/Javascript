var Month = {
    name: ["Jänner","Februar","März","April","May","Juni","Juli","August","September","Oktober","November","Dezember"],
    lenght: [31,28,31,30,31,30,31,31,30,31,30,31],   
}
var space= 35;
var currentMonth=0;
var weekdays= ["MO","DI","MI","DO","FR","SA","SO"];
var calenderday=1;


for(var w = 0; w<12;w++){
document.write(Month.name[currentMonth] + "<br>")
for(var i=0; i<7;i++){
    document.write("|&nbsp;" + weekdays[i] )
}
document.write("|"+"<br>")


for(var rows=0;rows<5;rows++){
for( var i=0;i<7;i++){
    if(calenderday<=Month.lenght[currentMonth]){
    document.write("|&nbsp" + calenderday + "&nbsp")
    
    }
    if(calenderday<10){
        document.write("&nbsp;&nbsp;")
    }
    calenderday++;
    space--;
    if(calenderday>Month.lenght[currentMonth]){
        calenderday=1;
        for(let i=0; i<(35-Month.lenght[currentMonth]);i++){
            document.write("|&nbsp;&nbsp;&nbsp;" + "_" + "&nbsp")
            space--;
            
        }
        if(space<=0){
            currentMonth++
            break;
        }
        
        
    }
    
    
    
 }
 
 document.write("|"+"<br>")
 
}
document.write("<br>" + "<br>")
}






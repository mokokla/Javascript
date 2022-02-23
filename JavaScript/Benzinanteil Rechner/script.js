
function printOutputAmount() {
    document.getElementById("outputamount").innerHTML = calculateOutputamount();

}
function calculateOutputamount() {

    var inputstartamount1= document.getElementById("valuestart1").value;
    var inputendamount1= document.getElementById("valueend1").value;
    var amount1 = parseInt(inputendamount1-inputstartamount1);

    var inputstartamount2= document.getElementById("valuestart2").value;
    var inputendamount2= document.getElementById("valueend2").value;
    var amount2 = parseInt(inputendamount2-inputstartamount2);

    var inputstartamount3= document.getElementById("valuestart3").value;
    var inputendamount3= document.getElementById("valueend3").value;
    var amount3 = parseInt(inputendamount1-inputstartamount3);

    var inputstartamount4= document.getElementById("valuestart4").value;
    var inputendamount4= document.getElementById("valueend4").value;
    var amount4 = parseInt(inputendamount1-inputstartamount4);

    var inputstartamount5= document.getElementById("valuestart5").value;
    var inputendamount5= document.getElementById("valueend5").value;
    var amount5 = parseInt(inputendamount1-inputstartamount5);

    var inputstartamount6= document.getElementById("valuestart6").value;
    var inputendamount6= document.getElementById("valueend6").value;
    var amount6 = parseInt(inputendamount6-inputstartamount6);

    var inputstartamount7= document.getElementById("valuestart7").value;
    var inputendamount7= document.getElementById("valueend7").value;
    var amount7 = parseInt(inputendamount7-inputstartamount7);

    var inputstartamount8= document.getElementById("valuestart8").value;
    var inputendamount8= document.getElementById("valueend8").value;
    var amount8 = parseInt(inputendamount8-inputstartamount8);

    var inputstartamount9= document.getElementById("valuestart9").value;
    var inputendamount9= document.getElementById("valueend9").value;
    var amount9 = parseInt(inputendamount9-inputstartamount9);

    var inputstartamount10= document.getElementById("valuestart10").value;
    var inputendamount10= document.getElementById("valueend10").value;
    var amount10 = parseInt(inputendamount10-inputstartamount10);

    let SumOfDrivenKilometers = "";
   
        SumOfDrivenKilometers= amount1+amount2+amount3+amount4+amount5+amount6+amount7+amount8+amount9+amount10
    
    
    console.log(SumOfDrivenKilometers)
    return SumOfDrivenKilometers;
}
document.getElementById("calculate").addEventListener("click", function () {
    printOutputAmount();
});

function getAmountOfInput1() {
    var inputamount1 = document.getElementById("value1").value;
    var inputamount1 = parseInt(inputamount1);
    return inputamount1; 
}
function getAmountOfInput2(){
    var inputamount2 = document.getElementById("value2").value;
    var inputamount2 = parseInt(inputamount2);
    return inputamount2
}

function printOutputAmount() {
    document.getElementById("outputamount").innerHTML = calculateOutputamount();

}
function calculateOutputamount() {
    let outputamount = "";
    outputamount= ((getAmountOfInput1()*1.43)/getAmountOfInput2())*3.4;
    console.log(outputamount)
    if(outputamount==0){
        outputamount=0
    }
    if(outputamount<0){
        outputamount="negativ"
    }
    if(outputamount>0){
        outputamount="positiv"
    }
    return outputamount;
}
document.getElementById("calculate").addEventListener("click", function () {
    getAmountOfInput1();
    getAmountOfInput2();
    printOutputAmount();
});

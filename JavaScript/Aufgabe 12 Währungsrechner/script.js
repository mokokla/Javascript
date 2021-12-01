function getAmountOfInputcurrency() {
    var inputamount = document.getElementById("txtHowMuch").value;
    return inputamount;
}
document.getElementById("calculate").addEventListener("click", function () {
    getAmountOfInputcurrency();
    printOutputAmount();
});
function printOutputAmount() {
    document.getElementById("outputamount").innerHTML = calculateOutputamount();

}
var Currency = [{
    name: "euro",
    conversionFactor: 1.13
},
{
    name: "US-Dollar",
    conversionFactor: 1
},

{
    name: "peso",
    conversionFactor: 0.048
},
{
    name: "won",
    conversionFactor: 0.00084
},
{
    name: "yen",
    conversionFactor: 0.0087
},
{
    name: "franken",
    conversionFactor: 1.08
}]
function calculateOutputamount() {
    let outputamount = "";
    var inputcurrency = document.getElementById("currencyInput").value;
    var outputcurrency = document.getElementById("currencyOutput").value;
    for (i = 0; i < Currency.length; i++) {
        if (inputcurrency == Currency[i].name) {
            var inputCurrencyConversionFactor =Currency[i].conversionFactor
            break;
        }
    }
    for (i = 0; i < Currency.length; i++) {
        if (outputcurrency == Currency[i].name) {
            var outputCurrencyConversionFactor =Currency[i].conversionFactor
            break; 
        }
    }
    outputamount= (getAmountOfInputcurrency()*inputCurrencyConversionFactor)/outputCurrencyConversionFactor;
    outputamount= outputamount.toFixed(2);
    return outputamount;
}
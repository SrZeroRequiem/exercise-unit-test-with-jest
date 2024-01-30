// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar) {
    let euro = dollar/oneEuroIs.USD;
    let yen = euro*oneEuroIs.JPY;
    return yen;
}
function fromEuroToDollar(euro) {
    let dollar = oneEuroIs.USD*euro;
    return dollar;
}
function fromYenToPound(yen){
    let euro = yen/oneEuroIs.JPY;
    let pound = euro*oneEuroIs.GBP;
    return pound;
}

module.exports = {fromEuroToDollar, fromDollarToYen,fromYenToPound}
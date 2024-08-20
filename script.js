var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");


function fetchCryptoPrices() {
    var settings = {
        "async": true,
        "crossDomain": true, 
        "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=aud",
        "method": "GET",
        "headers": {}
    };

    $.ajax(settings).done(function (response) { 
        btc.innerHTML = response.bitcoin.aud;
        eth.innerHTML = response.ethereum.aud;
        doge.innerHTML = response.dogecoin.aud;
    });
}

fetchCryptoPrices();

setInterval(fetchCryptoPrices, 5000);
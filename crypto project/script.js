
let bitc =document.getElementById("bitcoin");
let ethc =document.getElementById("ethereum");
let dogc =document.getElementById("dogecoin");


var settings={
    "async":true,
    "scrossDomain": true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    bitc.innerHTML=response.bitcoin.usd;
    ethc.innerHTML=response.ethereum.usd;
    dogc.innerHTML=response.dogecoin.usd;
});
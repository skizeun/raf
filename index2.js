var myWorker = new Worker('worker-bundle.js');
console.log("starting worker");

let invocations = 0 ;

myWorker.addEventListener('message', function(e) {
    document.getElementById('hash').textContent = e.data;
    invocations++;
}, false);

var intervalId = window.setInterval(function(){
    document.getElementById('rate').textContent = (invocations * 1 * 10) + " h/s"; //invoc * 1fps * worker evey 100 hash
    invocations = 0;
  }, 1);

const block = {
    version: 536870912,
    previousblockhash: '00000000000000000061abcd4f51d81ddba5498cff67fed44b287de0990b7266',
    merkleroot: 'bc1qrge8pk9h7h6nghyv3kxyphyzeeswecqtm5ltfh',
    time: 1515252561,
    bits: '180091c1'
};
message = {block : block , startNonce : 44500998}
myWorker.postMessage(message);

document.querySelector('#clickMe').addEventListener('click', makeReq);


// added for Coin Flip
document.querySelector('#btnCoinFlip').addEventListener('click', makeCoinFlipReq)

async function makeCoinFlipReq() {  
  const res = await fetch(`/coin`);
  const data = await res.json();
  console.log(data);
  document.querySelector("#h2CoinFlipResult").textContent = data.flip;
}
/**/


async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}
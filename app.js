let price = 100;

let priceDiv = document.getElementById('price');
priceDiv.innerHTML=`Rs ${price}`;

let applyPromo = document.querySelector('#apply-promo');
let statusDiv = document.querySelector('#status');

applyPromo.addEventListener("click",()=>{
   const promocodes = ['GET50','GET10','GET20','GET30','GET40',80];
   let promocode = document.querySelector('#promocode');
   
   if(promocodes.includes(promocode.value)){
    price=50;
    priceDiv.innerHTML=`Rs ${price}`;
    setTimeout(()=>{
        statusDiv.innerHTML = '';
    },1500)
    statusDiv.innerHTML='<br/><center><b style="color:green;">Promocode Applied!<b/><center>';
   }else{
    setTimeout(()=>{
    statusDiv.innerHTML = '';
    },1000)
    statusDiv.innerHTML='<br/><center><b style="color:red;">Wrong Promocode!<b/><center>';
   }
})

let purchase = document.querySelector('#purchase');

purchase.addEventListener('click',()=>{
    alert('You purchased Item for '+ price + '');
})

var subtotal = document.getElementById("subtotal")
var total = document.getElementById("total")
var next = document.getElementById("next")
var calculateBtn = document.getElementById("calculate")
var clear = document.getElementById("clearAll")
var sum = 0;
//to get check and price value
var dishAll = document.querySelectorAll(".dish")
//to get quantity
var quantityAll = document.querySelectorAll(".quantity")
//to get name of dishes
var label = document.getElementsByTagName('label'); 

 //update prices from sales page
 for(let i = 0; i<label.length; i++){
  for(const key in localStorage){
      if(label[i].innerHTML == key){
        let salesPriceWithSymbol = localStorage.getItem(key)
        let salesPriceNoSymbol = parseFloat(salesPriceWithSymbol.split("$")[1])
        dishAll[i].value = salesPriceNoSymbol      
      }
  }
 }

function isChecked(){
  let mysum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  for(let i = 0; i<quantityAll.length; i++){
    if(dishAll[i].checked==true&&quantityAll[i].value!=""){
      mysum[i] = quantityAll[i].valueAsNumber * parseFloat(dishAll[i].value)
    } else mysum[i] = 0; 
  }

sum = mysum[0]+mysum[1]+mysum[2]+mysum[3]+mysum[4]+mysum[5]+mysum[6]+mysum[7]+mysum[8]+mysum[9]+mysum[10]
+mysum[11]+mysum[12]+mysum[13]+mysum[14]+mysum[15]+mysum[16]+mysum[17]+mysum[18]+mysum[19]+mysum[20]
+mysum[21]+mysum[22]
console.log("sum is"+sum)
}

// when calculate button is clicked
if(calculateBtn){
calculateBtn.addEventListener('click', ()=>{
  // alert when sidedish is checked but no quantity is filled
  for(let i =0; i<quantityAll.length; i++){
    if(dishAll[i].checked && quantityAll[i].value=="" 
    || dishAll[i].checked==false&&quantityAll[i].value!="")
      alert("please check the dish "+ label[i].innerHTML)
  }

  // show subtotal & total & next
  if(sum>0 && sum<60){
    subtotal.textContent = "$"+sum
    total.textContent = "$"+(sum*1.15 + 10).toFixed(2);
    next.disabled = false;

  // free delivery if sum>=60
  }else if(sum>=60){
    let deliveryFee = document.getElementById("deliveryFee")
    subtotal.textContent = "$"+sum
    deliveryFee.textContent = "0.0"
    total.textContent = "$"+(sum*1.15).toFixed(2);
    next.disabled = false;
  }else{
    subtotal.textContent = "0.0"
    total.textContent = "0.0"
    next.disabled = true;
  }    
})
}


//Clear all
// if(clear){
// clear.addEventListener('click', ()=>{
  
//  sum = 0
//  subtotal.textContent = "0.0"
//  total.textContent = "0.0"
//  next.disabled = true;

//  for(let i = 0; i<dishAll.length; i++){
//     dishAll[i].checked = false;
//  }

//  for(let i = 0; i<quantityAll.length; i++){
//     quantityAll[i].value="";
//  }
// })
// }
    


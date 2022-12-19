var salesName = document.querySelectorAll('[data-label=Menu]')
var salesPrices = document.querySelectorAll('[data-label=SalesPrice]')

  for(let i = 0; i<salesName.length; i++){

    let sn = salesName[i].innerHTML
    let sp = salesPrices[i].innerHTML
    window.localStorage.setItem(sn, sp);

  }

  for(const key in localStorage){
    console.log(localStorage.getItem(key))
   }


const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


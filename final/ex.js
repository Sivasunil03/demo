let description=document.getElementById('description')
let amount = document.getElementById('amount')
let explist = document.getElementById('explist')
let total = document.getElementById('total')
let addbutton = document.getElementById('addbutton')
 let total1=0;

addbutton.addEventListener('click', function() {
    let descValue = description.value
    let amtValue = amount.value
 let li = document.createElement('li')
 li.textContent="".concat(descValue ," : Rs").concat(amtValue)
 explist.appendChild(li)
 total1+=parseFloat(amtValue)
 total.textContent = total1.toFixed(2)
 description=''
 amount=''

})
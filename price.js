 //When amount is increased price is increased as well
 const increaseCount=document.getElementById('increaseCnt');
 increaseCount.addEventListener('click',function(event){
    updateCountIncrease('phoneAmount')
    updatePricePhone('phoneAmount','phoneCost')
    finalPrice()
 })

 //case count and price
 const IncreaseCaseCnt=document.getElementById('caseAmountIncrease');
 IncreaseCaseCnt.addEventListener('click',function(event){
    updateCountIncrease('caseCount');
    updatePriceCase('caseCount','caseCost')
    finalPrice()
    
 })
 // phone decrease and cost
 const decreaseCount= document.getElementById('decreaseCnt');
 decreaseCount.addEventListener('click',function(event){
    updateCountDecrease('phoneAmount');
    updatePricePhone('phoneAmount','phoneCost')
    finalPrice()
 })
 //case decrease and cost 
 const caseCount = document.getElementById('caseAmountDecrease');
 caseCount.addEventListener('click',function(event){
    updateCountDecrease('caseCount')
    updatePriceCase('caseCount','caseCost')
    finalPrice()

 })

 function updateCountIncrease(id){
    const Amount= document.getElementById(id).value;
    const AmountNum=parseInt(Amount);
    var currentAmount= AmountNum+1;
    document.getElementById(id).value=currentAmount;
    
 }
 function updateCountDecrease(id){
    const Amount= document.getElementById(id).value;
    const AmountNum=parseInt(Amount);
    var currentAmount= AmountNum-1;
    document.getElementById(id).value=currentAmount;
    
 }
 function updatePricePhone(id,idPrice){
    const totalPhonePrice= document.getElementById(id).value;
    const totalPhoneCost=totalPhonePrice*1219
    document.getElementById(idPrice).innerText=totalPhoneCost
 }
 function updatePriceCase(id,idPrice){
    const totalPhonePrice= document.getElementById(id).value;
    const totalPhoneCost=totalPhonePrice*59
    document.getElementById(idPrice).innerText=totalPhoneCost
 }

 function finalPrice(){
    const subtotalPrice=parseInt(document.getElementById('phoneCost').innerText) + parseInt(document.getElementById('caseCost').innerText);
    document.getElementById('subtotal').innerText=subtotalPrice
    document.getElementById('total').innerText=subtotalPrice
 }



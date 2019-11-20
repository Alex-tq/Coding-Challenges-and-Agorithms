/*
JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second argument 
(cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} 
with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, 
with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

For Example:

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
Passed
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
Passed
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/
function checkCashRegister(price, cash, cid) {
  let totalInCid = cid.map(x => x[1]).reduce((acc, val) => Math.round((acc+val)*100)/100);
  let change = cash-price;
  let minus;
  let currencyUnit = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  let obj = {status: "", change: []};
  //Determines the status of the object.
  if(change<totalInCid){
    obj.status = 'OPEN';
  }
  else if(change>totalInCid){
    obj.status = "INSUFFICIENT_FUNDS";
    return obj;
  }else{obj.status = "CLOSED";}
  //Iterate throug the values of the array from largest currency to smallest.
  for(let i = cid.length-1; i >= 0 ; i--){
    //if the value of the current element is 0 then go to the next one.
    if(cid[i][1]!==0){
    //if not enough cash to give exact change the it is insufficient.
    if(i===0 && change - cid[i][1]>0) return {status: "INSUFFICIENT_FUNDS", change:[]};
      //if change is more or equals to the current value then push the current element to obj.change.
      if(change >= cid[i][1]){  
        obj.change.push(cid[i]);
        //substract from change and keep the number accurate to the 2nd decimal place.
        change = Math.round((change-cid[i][1])*1000)/1000; 
      }
      //If the current currency if less than or equal to change push the coorect amount.
      else if(currencyUnit[i]<=change){
        minus = Math.floor(change/currencyUnit[i])*currencyUnit[i];
        //substract from change and keep the number accurate to the 2nd decimal place.
        change= Math.round((change-minus)*1000)/1000;
        obj.change.push([cid[i][0], minus]);       
      }
    }
  }
  //If the status is closed return an object containing the status and the cash in register.
  if(obj.status==='CLOSED') obj.change=cid;
 
  return obj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log('last');
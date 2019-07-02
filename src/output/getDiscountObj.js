import {getDiscount} from './discount';
import discountItem from './discount-item';

function getDis(json){
  for (let index = 0; index < json.items.length; index++) {
    let obj = {}
    obj=getDiscount(json.items[index].product, json.items[index].amount, json.discountCards[0])
    if(obj.discount>0){
      discounts.push(new discountItem(obj.currentPro.productNo, obj.currentPro.productName, -obj.discount))
    }
  }
  return discounts
}
export {
  getDis
}
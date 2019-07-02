
import OrderItem from '../../src/output/order-item';
import DiscountItem from '../../src/output/discount-item';
const productMessage = [
  {productNo: '001001', productName: '世园会五十国钱币册', price: 998.00, rate: 1, fullReduction: 0
},
{productNo: '001002', productName: '2019北京世园会纪念银章大全40g', price: 1380.00, rate: 0.9, fullReduction: 0
},
  {productNo: '003001', productName: '招财进宝', price: 1580.00, rate: 0.95, fullReduction: 0},
  {productNo: '003002', productName: '水晶之恋', price: 980.00, rate: 1, fullReduction: '3_0.5,3+1'},
  {productNo: '002002', productName: '中国经典钱币套装', price: 998.00, rate: 0.95, fullReduction: '2000-30_100-10'},
  {productNo: '002001', productName: '守扩之羽比翼双飞4.8g', price: 1080.00, rate: 0.95, fullReduction: '3_0.5,3+1'},
  {productNo: '002003', productName: '中国银象棋12g', price: 698.00, rate: 0.9, fullReduction: '3000-350_2000-30_100-10'},
]
const buyList = []
let totalPrice = 0
function getProductMessage (buyItems) {
  for (let i = 0; i < productMessage.length; i++) {
    for (let j = 0; j < buyItems.length; j++) {
      if (buyItems[j].product === productMessage[i].productNo) {
        buyItems[j].productNo = productMessage[i].productNo
        buyItems[j].productName = productMessage[i].productName
        buyItems[j].price = productMessage[i].price
        buyItems[j].amount = buyItems[j].amount
        buyItems[j].subTotal = productMessage[i].price * buyItems[j].amount
        buyList.push(new OrderItem(buyItems[j]))
      }
    }
  }
  return buyList
}
function computedTotalPrice (buyItems) {
  for (let i = 0; i < productMessage.length; i++) {
    for (let j = 0; j < buyItems.length; j++) {
      if (buyItems[j].product === productMessage[i].productNo) {
        buyItems[j].price = productMessage[i].price
        buyItems[j].amount = buyItems[j].amount
        totalPrice += buyItems[j].price * buyItems[j].amount
      }
    }
  }
  return totalPrice
}
export default {
  getProductMessage,
  computedTotalPrice
}
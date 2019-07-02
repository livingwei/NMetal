


const productMessage = [ // discount 1 存在优惠 0未设置优惠
  {productNo: '001001', productName: '世园会五十国钱币册', price: 998.00, rate: 1, discountOne: '0',discountTwo: '0',discountThree: '0', discountFour: '0', discountFive: '0'
},
{productNo: '001002', productName: '2019北京世园会纪念银章大全40g', price: 1380.00, rate: 0.9, discountOne: '0',discountTwo: '0',discountThree: '0', discountFour: '0', discountFive: '0'
},
  {productNo: '003001', productName: '招财进宝', price: 1580.00, rate: 0.95, discountOne: '1',discountTwo: '0',discountThree: '0', discountFour: '0', discountFive: '0'},
  {productNo: '003002', productName: '水晶之恋', price: 980.00, rate: 1, discountOne: '0',discountTwo: '0',discountThree: '0', discountFour: '1', discountFive: '1'},
  {productNo: '002002', productName: '中国经典钱币套装', price: 998.00, rate: 0.95, discountOne: '0',discountTwo: '1',discountThree: '1', discountFour: '0', discountFive: '0'},
  {productNo: '002001', productName: '守扩之羽比翼双飞4.8g', price: 1080.00, rate: 0.95, discountOne: '0',discountTwo: '0',discountThree: '0', discountFour: '1', discountFive: '1'},
  {productNo: '002003', productName: '中国银象棋12g', price: 698.00, rate: 0.9, discountOne: '1',discountTwo: '1',discountThree: '1', discountFour: '0', discountFive: '0'},
]
function getCurrentPro(product){
  let currentPro = {}
  for (let index = 0; index < productMessage.length; index++) {
    if (productMessage[index].productNo === product){
      currentPro = productMessage[index]
      break
    }
  }
  return currentPro
}
function getDiscount(product, amount, discountCards){
  let totalPrice =''
  let discountList = []
  let currentOrderData = {}
  currentOrderData.currentPro = getCurrentPro(product)
  totalPrice = currentOrderData.currentPro.price * amount
  if(currentOrderData.currentPro.rate === 0.9 && discountCards === '9折券') {
    discountList.push(currentOrderData.currentPro.price * amount * (1 - 0.9))
  }
  if (currentOrderData.currentPro.discountOne === '1' && totalPrice > 3000) {
    discountList.push(350 * Math.floor(totalPrice/3000))
  }
  if (currentOrderData.currentPro.discountTwo === '1' && totalPrice > 2000) {
    discountList.push(30 * Math.floor(totalPrice/2000))
  }
  if (currentOrderData.currentPro.discountThree === '1' && totalPrice > 1000) {
    discountList.push(10 * Math.floor(totalPrice/1000))
  }
  if (currentOrderData.currentPro.discountFour === '1' && amount > 3) {
    discountList.push(currentOrderData.currentPro.price * 0.5)
  }
  if (currentOrderData.currentPro.discountFive === '1' && amount > 4) {
    discountList.push(currentOrderData.currentPro.price)
  }
  currentOrderData.discount = discountList.sort()[discountList.length-1]
  return currentOrderData
}

export {
  getDiscount
}

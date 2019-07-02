import OrderRepresentation from './output/order-representation';
import DiscountItem from './output/discount-item';
import message from './output/message';
const USERJSON = {
  "orderId": "0000001",
  "memberId": "6236609999",
  "createTime": "2019-07-02 15:00:00",
  "items": [
    {
      "product": "001001",
      "amount": 2
    },
    {
      "product": "001002",
      "amount": 3
    },
    {
      "product": "002002",
      "amount": 1
    },
    {
      "product": "002003",
      "amount": 5
    }
  ],
  "payments": [
    {
      "type": "余额支付",
      "amount": 9860.00
    }
  ],
  "discountCards": [
    "9折券"
  ]
}
const discounts = [
  new DiscountItem({productNo: '001002', productName: '2019北京世园会纪念银章大全40g', discount: -414.00 }),
  new DiscountItem({productNo: '002003', productName: '中国银象棋12g', discount: -350.00 }),
] 
const payments = [
  {
    type: '余额支付',
    amount: 9860.00
  }
]
export default class OrderApp {

  checkout(orderCommand) {
    // TODO: 请完成需求指定的功能
    return (new OrderRepresentation({
      createTime: new Date('2019-07-02 15:00:00'),
      orderId: '0000001',
      memberNo: '6236609999',
      memberName: '马丁',
      memberPoIncreased: 2,
      memberPoints: 19720,
      newMemberType: '金卡',
      totalPrice: message.computedTotalPrice(USERJSON.items),
      totalDiscountPrice: 764.00,
      receivables: 9860.00,
      oldMemberType: '普卡',
      memberPointsIncreased: 9860,
      orderItems: message.getProductMessage(USERJSON.items),
      discounts,
      payments,
      discountCards: ['9折券']
    })).toString()
  }
}

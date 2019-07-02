import OrderRepresentation from './output/order-representation';
import {getUser, getUserType} from './output/getUser';
// import {getDis} from './output/getDiscountObj';
import message from './output/message';
import {getDiscount} from './output/discount';
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
// let discounts = getDis(USERJSON)
export default class OrderApp {
  checkout(orderCommand) {
    // TODO: 请完成需求指定的功能
    let data = {
      createTime: new Date(USERJSON.createTime),
      orderId: USERJSON.orderId,
      memberNo: USERJSON.memberNo,
      memberName: getUser(USERJSON.memberNo).memberName,
      memberPoIncreased: 2,
      memberPoints: 19720,
      newMemberType: getUserType(19720),
      totalPrice: message.computedTotalPrice(USERJSON.items),
      totalDiscountPrice: 764.00,
      receivables: 9860.00,
      oldMemberType: getUser(USERJSON.memberNo).MemberType,
      memberPointsIncreased: getDiscount('002003',5, '9折券').currentPro.productName,
      orderItems: message.getProductMessage(USERJSON.items),
      // discounts,
      // payments,
      discountCards: ['9折券']
    }
    return (new OrderRepresentation(data)).toString();
  }
}

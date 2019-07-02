
function getUser(userCard) {
  const userList = [
    {memberNo: '6236609999',  memberName: '马丁',  memberPoIncreased: 2,  memberPoints: 9860,  MemberType: '普卡'},
    {memberNo: '6630009999',  memberName: '王立',  memberPoIncreased: 2,  memberPoints: 48860,  MemberType: '金卡'},
    {memberNo: '8230009999',  memberName: '李想',  memberPoIncreased: 2,  memberPoints: 98860,  MemberType: '白金卡'},
    {memberNo: '9230009999',  memberName: '张三',  memberPoIncreased: 2,  memberPoints: 198860,  MemberType: '钻石卡'}
  ]
  let userData = {}
  for(let i = 0; i < userList.length; i++){
    if (userList[i].memberNo === userCard){
      userData =  userList[i]
      break
    }
  }
  return userData
}

function getUserType(memberPoints) {
  if (memberPoints >= 100000) {
    return '钻石卡'
  }
  if (memberPoints >= 50000) {
    return '白金卡'
  }
  if (memberPoints >= 10000) {
    return '金卡'
  }
  return '普卡'
}

function getMultiple(userType){
  const userMultiple = {
    '普卡': 1,
    '金卡': 1.5,
    '白金卡': 1.8,
    '钻石卡': 2
  }
  return userMultiple[userType]
}

export {
  getUser,
  getUserType,
  getMultiple
} 
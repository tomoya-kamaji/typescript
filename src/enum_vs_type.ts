// enmu値
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}
console.log(Role.ADMIN) // 0
console.log(Role.READ_ONLY) // 1
console.log(Role.AUTHOR) // 2



type CompanyStatus = 'init' | 'active'
// 値に名前を付けたいとき
// 外からつかうときにclientStatusValueをimportして使う
const clientStatusValue = {
    init: 0,
    active: 1,
} as const;
type ClientStatus = typeof clientStatusValue[keyof typeof clientStatusValue];


console.log(clientStatusValue.init);
console.log(clientStatusValue.active);

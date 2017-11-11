router.beforeEach ((to, from, next) => {
let accessMenu = store.state.env.accessMenu
let hasLogin = store.state.env.haslogin
if (to.name === 'login') {
next()
} else {
if (accessMenu.length === 0 || hasLogin === false) {
// 跳转到登录页
next({name: 'login'})
} else {
if (to.name === 'home') {
next()
} else {
// 查看路径是否在允许的路由内
const toName = to.name
console.log(toName)
if (!toName) {
next({name: 'home'})
} else {
let canGo = findName(toName,accessMenu)
console.log(canGo)
if (canGo) {
next()
} else {
next({name: 'home'})
}
}
}
}
}
})

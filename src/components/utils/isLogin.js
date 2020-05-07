export const isLogin = () => {
  return !!localStorage.getItem('token') && !!localStorage.getItem('user')
}

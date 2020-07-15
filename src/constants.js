const proxyAddress = process.env.VUE_APP_PROXY_ADDRESS || 'localhost'
const registrationPort = '8081'
const loginPort = '8082'


export const API_ADDRESS = 'http://'+proxyAddress+':'
export const REGISTER_ADDRESS = API_ADDRESS+registrationPort+'/register'   
export const LOGIN_ADDRESS = API_ADDRESS+loginPort+'/login'   


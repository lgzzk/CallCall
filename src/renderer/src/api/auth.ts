import http from '@renderer/utils/request'
import { Login } from '@renderer/api/type/auth'

export const userLogin = async (username: string, password: string) =>{
  return await http.post<Login>('/api/auth/login', {
    username,
    password
  })
}
import { getLocalStorage } from '@renderer/utils/localStorage'

const http = {
    async get<T>(url: RequestInfo | URL): Promise<T>{
      const response = await fetch(getUrl(url), {
        headers:{
          'Authorization': getLocalStorage('token')
        }
      })

      const data = await response.json()
      return isSuccess(data)
    },
    async post<T>(url: RequestInfo | URL, body: any): Promise<T>{

      const response = await fetch(getUrl(url), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getLocalStorage('token')
        },
        body: JSON.stringify(body)
      })

      const data = await response.json()

      return isSuccess(data)

    }
}

function isSuccess(data: any){
  if (data.success){
    return data
  }else{
    alert(data.message)
    throw new Error(data.message)
  }
}

function getUrl(url: RequestInfo | URL){
    return import.meta.env.VITE_API_BASE_URL + url
}

export default http

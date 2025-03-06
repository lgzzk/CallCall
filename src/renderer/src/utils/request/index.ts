const http = {
    async get<T>(url: RequestInfo | URL): Promise<T>{
      return await exceptionHandler(async _=>{
        const response = await fetch(url)
        return await response.json()
      })
    },
    async post<T>(url: RequestInfo | URL, body: any): Promise<T>{
      return await exceptionHandler(async _=>{
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        return await response.json()
      })
    }
}

async function exceptionHandler (fn: Function){
    try {
        return await fn()
    }catch (error: Error | any){
        console.error('Fetch error:', error)
        throw error
    }
}

export default http

type ResponseType = (url: string, method?: string, body?: null|any, headers?: any) => Promise<any>

export const request: ResponseType = async (url, method = 'GET', body = null, headers = {}) => {
    try {
        if (body) {
            if (!headers['Content-Type']) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
                headers["x-api-key"] = "df931332-9bb9-4b16-b256-eaa95e9f4237"
                headers["Access-Control-Allow-Origin"] = "*"
                headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"
            }
        }
        const response = await fetch(url, { method, body, headers })
        const data = await response.json()
        return data
    } catch (e) {
        throw e
    }
}
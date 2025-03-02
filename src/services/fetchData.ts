export const fecthData = async  (url: string, options?: RequestInit) => {
    const response = await fetch(url, {...options})
    if (!response.ok) throw new Error(`Http Error! Status: ${response.status}`)
    return response.json()
}
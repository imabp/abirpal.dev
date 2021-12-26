export const getSnippets =async (window: Window, full_slug:string, uuid:string) => {
    const payload = {
        uuid:uuid?uuid:undefined,
        full_slug:full_slug?full_slug:undefined
    }
    const response =  await PostRoute(window,'getSnippet',payload)
    if(response.status===200)
    {
        const responseBody = await response.json()
        return responseBody.snippet;    
    }
}

const PostRoute = async (window: Window, route: string, payload: Record<string, any>) => await window.fetch(`/api/${route}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    })
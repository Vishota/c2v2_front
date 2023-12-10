export const add = new ApiAccessor<{
    title: string,
    content: string
}, {
    id: number
}>('/content/add')

export const get = new ApiAccessor<{
    id: number
}, {
    id: number,
    owner_user_id: number,
    title: string,
    content: string,
    accessible: boolean,
    created: string,
}>('/content/get')

export const show = new ApiAccessor<{
    id: number
}, {
    success: boolean
}>('/content/show')

export const hide = new ApiAccessor<{
    id: number
}, {
    success: boolean
}>('/content/hide')

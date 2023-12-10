export const create = new ApiAccessor<{
    title: string,
    about: string,
    price: number
}, {
    id: number
}>('/courses/new')

export const show = new ApiAccessor<{
    id: number
}, {
    success: boolean
}>('/courses/show')

export const hide = new ApiAccessor<{
    id: number
}, {
    success: boolean
}>('/courses/hide')

export const get = new ApiAccessor<{
    id: number
}, {
    id: number,
    owner_user_id: number,
    title: string,
    about: string,
    accessible: boolean,
    price: number
}>('/courses/get')
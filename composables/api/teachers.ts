export const addSelf = new ApiAccessor<{
    name: string,
    speciality: string,
    about: string
}, {
    success: boolean
}>('/teachers/addSelf')

export const info = new ApiAccessor<{
    id: number
}, {
    user_id: number,
    name: string,
    speciality: string,
    about: string,
    since: string
    is_active: boolean
}>('/teachers/info')
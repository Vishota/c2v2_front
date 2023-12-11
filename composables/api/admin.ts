export const ban = new ApiAccessor<{
    id: number
}, {
    success: boolean
}>('/admin/ban')

export const unban = new ApiAccessor<{
    id: number
}, {
    success: boolean
}>('/admin/ban')

export const setTeacherActive = new ApiAccessor<{
    id: number,
    active: true
} | {
    id: number,
    inactive: true
}, {
    success: boolean
}>('/admin/setTeacherActive')

export const getInactive = new ApiAccessor<{}, {
    teachers: number[]
}>('/admin/listInactive')
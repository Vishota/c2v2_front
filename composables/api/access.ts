export const giveAccess = new ApiAccessor<{
    account: number,
    course: number
}, {
    success: boolean
}>('/courseAccess/give')

export const removeAccess = new ApiAccessor<{
    account: number,
    course: number
}, {
    success: boolean
}>('/courseAccess/remove')

export const check = new ApiAccessor<{
    course: number
}, {
    access: boolean
}>('/courseAccess/check')
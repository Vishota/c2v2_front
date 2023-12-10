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

export const me = new ApiAccessor<undefined, {
    id: number,
    isAdmin: boolean,
    isPrimeAdmin: boolean,
    isTeacher: boolean,
    isActiveTeacher: boolean,
    isInactiveTeacher: boolean,
    username: string
}>('/auth/me')

export const auth = new ApiAccessor<{
    username: string,
    password: string,
    signup?: boolean
}, {
    success: boolean,
    id?: number
}>('/auth')
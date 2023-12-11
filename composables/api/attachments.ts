export const attach = new ApiAccessor<{
    course: number,
    content: number
}, {
    success: boolean
}>('/attachments/attach')

export const detach = new ApiAccessor<{
    course: number,
    content: number
}, {
    success: boolean
}>('/attachments/detach')

export const list = new ApiAccessor<{
    course: number
}, {
    attached: number[]
}>('/attachments/list')
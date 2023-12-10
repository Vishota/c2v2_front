export const search = new ApiAccessor<{
    text: string
}, {
    results: {
        id: number;
        rank: number;
    }[]
}>('/search/byprompt')

export const ownedBy = new ApiAccessor<{
    teacherId: number
}, {
    results: number[]
}>('/search/byowner')

export const accessibleFor = new ApiAccessor<{
    accountId: number
}, {
    results: number[]
}>('/search/byaccess')
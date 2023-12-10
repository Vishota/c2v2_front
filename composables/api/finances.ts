export const my = new ApiAccessor<{}, {
    wallet: {
        owner_user_id: number,
        balance: number,
        bonuses: number
    }
}>('/finances/my')

export const createWallet = new ApiAccessor<{}, {
    success: boolean
}>('/finances/createWallet')

export const deposit = new ApiAccessor<{
    method: 'freemoney',
    amount: number
}, {
    success: boolean
}>('/finances/deposit')

export const buy = new ApiAccessor<{
    id: number
}, {
    success: boolean
}>('/finances/buyCourse')
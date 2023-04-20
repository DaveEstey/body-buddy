import prisma from './index'

export async function login(email) {
    try {
        console.log('Logging in...')
        const user = await prisma.users.findUnique(
            { where: { email }})
        return { user }
    } catch (error) {
        console.log(error)
        return { error }
    }
}
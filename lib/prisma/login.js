import prisma from './index'

export async function login(userName) {
    try {
        console.log('Logging in...')
        const user = await prisma.users.findUnique(
            { where: { userName }})
        return { user }
    } catch (error) {
        console.log(error)
        return { error }
    }
}
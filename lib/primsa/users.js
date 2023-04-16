import prisma from './index'

export async function getUsers() {
    try {
        console.log('Getting all users...')
        const users = await prisma.users.findMany()
        return { users }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export async function createUser(user) {
    try {
        console.log('Creating user...')
        console.log({user})
        const userFromDB = await prisma.users.create({ data: user })
        return { user: userFromDB }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export async function getUserById(id) {
    try {
        const user = await prisma.user.findUnique({ where: { id } })
        return { user }
    } catch (error) {
        return { error }
    }
}
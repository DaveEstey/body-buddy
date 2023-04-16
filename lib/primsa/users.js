import prisma from './index'

// Get all users
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
// Create a new user
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
// Get user by id
export async function getUserById(id) {
    try {
        const user = await prisma.users.findUnique({ 
            where: { id }, 
            include: { workouts: true } })
        return { user }
    } catch (error) {
        console.log(error)
        return { error }
    }
}
// Edit user by id
export async function editUser(id, user) {
    try {
        console.log('Editing user...')
        const userFromDB = await prisma.users.update({ where: { id }, data: user })
        console.log('user edited successfully')
        return { user: userFromDB }
    } catch (error) {
        return { error }
    }
}

export async function deleteUser(id) {
    try {
        const user = await prisma.users.delete({ where: { id } })
        return { user }
    } catch (error) {
        return { error }
    }
}
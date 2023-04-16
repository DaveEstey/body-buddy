import prisma from './index'

export async function getWorkouts() {
    try {
        console.log('Getting all workouts...')
        const workouts = await prisma.workouts.findMany()
        return { workouts }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export async function createWorkout(workout) {
    try {
        console.log('Creating workout...')
        console.log({workout})
        const newWorkout = await prisma.workouts.create({ data: workout })
        return { workout: newWorkout }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export async function getWorkoutById(id) {
    try {
        console.log('Getting workout by id...')
        const workout = await prisma.workouts.findUnique({ where: { id } })
        return { workout }
    } catch (error) {
        return { error }
    }
}

export async function editWorkout(id, workout) {
    try {
        console.log('Editing workout...')
        const newWorkout = await prisma.workouts.update({ where: { id }, data: workout })
        console.log('workout edited successfully')
        return { workout: newWorkout }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export async function deleteWorkout(id) {
    try {
        const workout = await prisma.workouts.delete({ where: { id } })
        return { workout }
    } catch (error) {
        return { error }
    }
}
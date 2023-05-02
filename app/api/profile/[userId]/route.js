import { NextResponse } from 'next/server'
import { getWorkoutsByUserId } from '../../../../lib/prisma/workouts'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function GET(req, { params }) {
    const session = await getServerSession({ req, ...authOptions })
    console.log("Calling method to get workout by id")
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' })
    }
    try {
        console.log(`userId: ${params.userId}`)
        const id = params.userId
        const { workouts, error } = await getWorkoutsByUserId(id)
        if (error) throw new Error(error)
        return NextResponse.json({ workouts }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}
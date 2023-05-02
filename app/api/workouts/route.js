import { NextResponse } from 'next/server'
import { createWorkout, getWorkouts } from '../../../lib/prisma/workouts'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
    console.log("Calling method to get all workouts")
    try {
        const { workouts, error } = await getWorkouts()
        if (error) throw new Error(error)
        return NextResponse.json({ workouts }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}

export async function POST(req) {
    const session = await getServerSession({ req, ...authOptions })
    console.log("Calling method to create a new workout")
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' })
    }
    try {
        const body = await req.json()
        const { workout, error } = await createWorkout(body)
        if (error) throw new Error(error)
        return NextResponse.json({ workout }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}
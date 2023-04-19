import { NextResponse } from 'next/server'
import { createWorkout, getWorkouts } from '../../../lib/prisma/workouts'

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
    console.log("Calling method to create a new workout")
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
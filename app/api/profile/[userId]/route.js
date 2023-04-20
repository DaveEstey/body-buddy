import { NextResponse } from 'next/server'
import { getWorkoutsByUserId } from '../../../../lib/prisma/workouts'

export async function GET(req, { params }) {
    console.log("Calling method to get workout by id")
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
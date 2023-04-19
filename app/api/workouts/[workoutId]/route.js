import { NextResponse } from 'next/server'
import { deleteWorkout, editWorkout, getWorkoutById } from '../../../../lib/prisma/workouts'

export async function GET(req, { params }) {
    console.log("Calling method to get workout by id")
    try {
        console.log(`WorkoutId: ${params.workoutId}`)
        const id = params.workoutId
        const { workout, error } = await getWorkoutById(id)
        if (error) throw new Error(error)
        return NextResponse.json({ workout }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}

export async function PUT(req, { params }) {
    console.log("Calling method to edit workout by id")
    try {
        console.log(`workoutId: ${params.workoutId}`)
        const id = params.workoutId
        const body = await req.json()
        console.log(`Body: ${JSON.stringify(body)}`)
        const { workout, error } = await editWorkout(id, body)
        if (error) throw new Error(error)
        return NextResponse.json({ workout }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}

export async function DELETE(req, { params }) {
    console.log("Calling method to delete workout by id")
    try {
        console.log(`workoutId: ${params.workoutId}`)
        const id = params.workoutId
        const { workout, error } = await deleteWorkout(id)
        if (error) throw new Error(error)
        return NextResponse.json({ workout }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}
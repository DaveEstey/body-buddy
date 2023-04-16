import { getUsers, createUser } from '../../../lib/prisma/users'
import { NextResponse } from 'next/server'

export async function GET() {
    console.log("Calling method to get all users")
    try {
        const { users, error } = await getUsers()
        if (error) throw new Error(error)
        return NextResponse.json({ users }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}

export async function POST(request) {
    console.log("Calling method to create a new user")
    try {
        const body = await request.json()
        const { user, error } = await createUser(body)
        if (error) throw new Error(error)
        return NextResponse.json({ user }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}
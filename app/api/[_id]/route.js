import { getUserById } from '../../../lib/primsa/users'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
    console.log("Calling method to get user by id")
    try {
        const id = params.id
        const { users, error } = await getUserById(id)
        if (error) throw new Error(error)
        return NextResponse.json({ users }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}
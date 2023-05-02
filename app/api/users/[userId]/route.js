import { NextResponse } from 'next/server'
import { deleteUser, editUser, getUserById } from '../../../../lib/prisma/users'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function GET(req, { params }) {
    console.log("Calling method to get user by id")
    const session = await getServerSession({ req, ...authOptions })
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' })
    }
    try {
        console.log(`UserId: ${params.userId}`)
        const id = params.userId
        const { user, error } = await getUserById(id)
        if (error) throw new Error(error)
        return NextResponse.json({ user }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}

export async function PUT(req, { params }) {
    console.log("Calling method to edit user by id")
    const session = await getServerSession({ req, ...authOptions })
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' })
    }
    try {
            console.log(`UserId: ${params.userId}`)
            const id = params.userId
            const body = await req.json()
            console.log(`Body: ${JSON.stringify(body)}`)
            const { user, error } = await editUser(id, body)
            if (error) throw new Error(error)
            return NextResponse.json({ user }, { status: 200 })
        }
        catch (error) {
            return NextResponse.json({ error: error.message })
        }
}

export async function DELETE(req, { params }) {
    console.log("Calling method to delete user by id")
    const session = await getServerSession({ req, ...authOptions })
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' })
    }
    try {
        console.log(`UserId: ${params.userId}`)
        const id = params.userId
        const { user, error } = await deleteUser(id)
        if (error) throw new Error(error)
        return NextResponse.json({ user }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message })
    }
}
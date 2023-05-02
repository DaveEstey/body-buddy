import { NextResponse } from 'next/server'
import { login } from '../../../lib/prisma/login'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(req) {
  const session = await getServerSession({ req, ...authOptions })
    console.log("Calling method to log in")
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' })
    }
    try {
        console.log('getting body')
        const body = await req.json()
        console.log('body', body)
        console.log(body.email)
        const { user, error } = await login(body.email)
        if (error) throw new Error(error)
        console.log('user', user)
          if (user.password === body.password) {
            console.log('passwords match')
            return NextResponse.json({ user }, { status: 200 })
          } else {
            console.log('passwords do not match')
            return NextResponse.json({ error: 'Incorrect password' }, { status: 400 })
          }
    } catch (error) {
        return NextResponse.json({ error: error.message })
    }
  }
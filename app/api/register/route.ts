import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request
) {
    try {
        const body = await request.json();
    const {email,name, password} = body;
    if(!email || !name || !password) {
        return new Response('Invalid request', {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword,
        }
    });
    return new Response(JSON.stringify(user), {status: 200});
    } catch (error: any) {
        console.log(error, "Register error");
        return new NextResponse(error.message, {status: 500});
    }
    
} 
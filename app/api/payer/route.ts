import { NextResponse } from 'next/server';

// Store the last payer in memory (would use a database in production)
let lastPayer: string = 'Nobody yet';

export async function GET() {
  return NextResponse.json({ lastPayer });
}

export async function POST(request: Request) {
  const data = await request.json();
  
  if (data && typeof data.name === 'string') {
    lastPayer = data.name;
    return NextResponse.json({ lastPayer });
  } else {
    return NextResponse.json(
      { error: 'Invalid request. Expected JSON with a "name" property.' },
      { status: 400 }
    );
  }
}
import {NextResponse } from 'next/server'
import { Shorts_Original } from '@/app/data/shorts/original'

export async function GET(request) {
  return NextResponse.json(
    Shorts_Original 
  )
}
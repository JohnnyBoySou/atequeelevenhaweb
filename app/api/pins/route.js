import {NextResponse } from 'next/server'
import { Geral } from '@/app/data/pins/geral'

export async function GET(request) {
  return NextResponse.json(
    Geral 
  )
}
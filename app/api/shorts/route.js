import {NextResponse } from 'next/server'
import { Days_Abril } from '@/app/data/month/abril'

export async function GET(request) {
  return NextResponse.json(
    Days_Abril
  )
}
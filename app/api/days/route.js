import {NextResponse } from 'next/server'
import { Days_Abril } from '../../data/month/abril'

export async function GET(request) {
  return NextResponse.json(
    Days_Abril
  )
}
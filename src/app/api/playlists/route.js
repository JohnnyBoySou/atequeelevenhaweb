import {NextResponse } from 'next/server'
import { Playlists } from './../../../data/playlists/music';

export async function GET(request) {
  return NextResponse.json(
    Playlists 
  )
}
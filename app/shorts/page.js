'use client'
import React, { useState, useEffect } from 'react';
import { Column, Row, Main, Title, Label, } from '@theme/global';
import { Play, Pause, Volume2, VolumeX, Heart, Share, ArrowLeft, ArrowRight } from 'lucide-react';
export default function Shorts() {


    const Short = () => { 
        const [status, setstatus] = useState(true);
        const [audio, setaudio] = useState();
        return(
            <Column style={{ width: 450, height: 800, borderRadius: 12,  backgroundColor: "#404040", position:'relative', margin: '0px 40px',}}>
                <Row style={{ justifyContent: 'space-between', alignItems: 'center', margin: 12, }}>
                    <Column>
                        {status ? 
                            <Play />
                            : 
                            <Pause />
                            }
                    </Column>
                    <Column>
                        {status ? 
                           <Volume2 />
                            : 
                            <VolumeX />
                            }
                    </Column>

                </Row>

                <Column style={{  position: 'absolute', left: 20, bottom: 20, }}>
                    <Title style={{ fontSize: 24, color: "#fff", }}>Título do Vídeo</Title>
                    <Label style={{ fontSize: 18, color: "#fff", }}>Descrição do Vídeo</Label>
                </Column>


                <Column style={{ position: 'absolute', right: 10, bottom: 20, }}>
                    <Column>
                        <Heart size={32}/>
                    </Column>
                    <Column>
                        <Share size={32}/>
                    </Column>
                </Column>
            </Column>
        )
     }

    return (
        <Main style={{ backgroundColor: "#262626", height: '97.5vh', justifyContent: 'center',  }}>
            <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
                <Column style={{ width: '30%', height: '100%', backgroundColor: "#323232", borderRadius: 24, justifyContent: 'center', alignItems: 'center',  }}>
                    <Column style={{ justifyContent: 'center', alignItems: 'center', width: 72, height: 72, borderRadius: 100, backgroundColor: "#505050", }}>
                        <ArrowLeft color="#FFF"/>
                    </Column>
                </Column>
                <Short/>
                <Column style={{ width: '30%', height: '100%', backgroundColor: "#323232", borderRadius: 24, justifyContent: 'center', alignItems: 'center',  }}>
                   <Column style={{ justifyContent: 'center', alignItems: 'center', width: 72, height: 72, borderRadius: 100, backgroundColor: "#505050", }}>
                    <ArrowRight color="#FFF"/>
                   </Column>
                </Column>
            </Row>
        </Main>
    )
}
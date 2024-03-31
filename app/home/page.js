'use client';
import { ArrowUpRight, Menu, Search, ShoppingCart } from 'lucide-react';
import React, { useState } from "react";
import { Column, Main, Row, Title, Spacer, CircleBt, Label, ButtonLight , OutBt} from '@theme/global';
import Image from 'next/image';
import Link from 'next/link';
import colors from '@theme/colors';
import { getUser } from '@hooks/useUser';

const logo = require('@assets/imgs/logo_sticker.png');
const audio = require('@assets/imgs/audio.png');

export default function Home() {
  const user = getUser();
  const saudacao = new Date().getHours() < 12 ? 'Bom dia' : new Date().getHours() < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <Main>
      <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom:20,}}>
        <Image src={logo} alt="Logo" width={200} height={100} style={{ objectFit: 'contain' }} />

        <Row style={{ justifyContent: 'space-between', alignItems: 'center', width: 500, }}>
          <Link href="/about">
            <Title>Pins</Title>
          </Link>
          <Link href="/fem">
            <Title>Shorts</Title>
          </Link>
          <Link href="/masc">
            <Title>Palavra do dia</Title>
          </Link>
        </Row>

        <Row style={{ width: 80, justifyContent: 'space-between', alignItems: 'center', }}>
          <Search strokeWidth={2} size={32} color={colors.primary} />
          <Menu strokeWidth={2} size={32} color={colors.primary} />
        </Row>
      </Row>

    <Column style={{ justifyContent: 'center', alignItems: 'center', width:1200, alignSelf:'center',  flexWrap: 'wrap',  }}>
      <Row style={{ flexWrap: 'wrap' }}>
        <Column style={{ width: 400,  }}>
          <Title style={{ fontSize: 52, lineHeight: 1,}}>{saudacao}, <br/>{user.displayName} <img src="https://camo.githubusercontent.com/0c732027af8a28d138e3698181f7be7c9b97d443b4beb9c7ce8ec4cffc6b4767/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966" width={60} height={60} alt='hands' /></Title>
        </Column>

        <Column style={{ flexGrow: 1, }}>
          <Row style={{ justifyContent: 'center', alignItems: 'center',  }}>
            <Column style={{ backgroundColor: colors.primary, width: 300, padding: 24,  borderRadius: 32, height: 300, }}>
              <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                <Title style={{ color: "#fff", fontWeight: 300, }}>Palavra <br/>do dia</Title>
                <CircleBt>
                  <ArrowUpRight strokeWidth={1.25}  size={42}/>
                </CircleBt>
              </Row>

              <Image src={audio} width={300} height={200} alt='audio' style={{ objectFit: 'contain', opacity: 0.6, margin: '-10px 0px', alignSelf: 'center',}}/>

              <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                <ButtonLight>Play</ButtonLight>
                <Title style={{ color: "#fff", fontWeight: 400, fontSize: 44, marginBottom: 10, textAlign: 'right', }}>12 de <br/>Junho</Title>
              </Row>
            </Column>

            <Spacer />

            <Column>
              <Column style={{ backgroundColor: "#FFE2BA", padding: 24,  borderRadius: 32,  width: 300, height: 200,  justifyContent: 'space-between',   }}>
                <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                  <Title style={{ fontWeight: 400, }}>Pins <br/>Cristões</Title>
                  <CircleBt>
                    <ArrowUpRight strokeWidth={1.25}  size={42}/>
                  </CircleBt>
                </Row>
                <Label>Crie sua própria coleção</Label>
                <Row style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: -24, marginLeft: 24, marginRight: 24,}}>
                  <Column style={{ width: 100, height: 90, borderTopLeftRadius: 12,  borderTopRightRadius: 12, backgroundColor: "#00000020",  }}/>
                  <Column style={{ width: 100, height: 50, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: "#00000020",  }}/>
                </Row>
              </Column>
              <Spacer/>

              <Column style={{ backgroundColor: "#262626", padding: 24,  borderRadius: 32,  width: 300, height: 200,  justifyContent: 'space-between',   }}>
                <Row style={{ justifyContent: 'space-between', alignItems: 'center',  }}>
                  <Title style={{ fontWeight: 400, color: "#fff",}}>Vídeos <br/>Curtos</Title>
                  <CircleBt>
                    <ArrowUpRight strokeWidth={1.25}  size={42}/>
                  </CircleBt>
                </Row>
                <Row style={{  alignItems: 'flex-end', marginBottom: -24, marginTop: 24,}}>
                  <Column style={{ width: 140, height: 200, borderTopLeftRadius: 12, marginRight: 12,  borderTopRightRadius: 12, backgroundColor: "#FFFFFF60",  }}/>
                  <Column style={{ width: 140, height: 200, borderTopLeftRadius: 12,  marginRight: 12, borderTopRightRadius: 12, backgroundColor: "#FFFFFF40",  }}/>
                  <Column style={{ width: 140, height: 200, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: "#FFFFFF20",  }}/>
                </Row>
              </Column>

            </Column>


          </Row>
        </Column>
      </Row>
      </Column>
    </Main>
  );
}

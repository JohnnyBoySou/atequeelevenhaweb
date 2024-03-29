'use client';
import { ArrowUpRight, Menu, Search, ShoppingCart } from 'lucide-react';
import React, { useState } from "react";
import { Column, Main, Row, Title, Spacer, CircleBt } from '@theme/global';
import Image from 'next/image';
import Link from 'next/link';
import colors from '@theme/colors';

const logo = require('@assets/imgs/logo_sticker.png');

export default function Home() {
  return (
    <Main>
      <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom:20,}}>
        <Image src={logo} alt="Logo" width={200} height={100} style={{ objectFit: 'contain' }} />

        <Row style={{ justifyContent: 'space-between', alignItems: 'center', width: 600, }}>
          <Link href="/about">
            <Title>SOBRE</Title>
          </Link>
          <Link href="/fem">
            <Title>FEMININA</Title>
          </Link>
          <Link href="/masc">
            <Title>MASCULINA</Title>
          </Link>
        </Row>

        <Row style={{ width: 140, justifyContent: 'space-between', alignItems: 'center', }}>
          <ShoppingCart strokeWidth={2} size={32} color={colors.primary} />
          <Search strokeWidth={2} size={32} color={colors.primary} />
          <Menu strokeWidth={2} size={32} color={colors.primary} />
        </Row>
      </Row>

      <Row style={{ flex: 1, }}>
        <Column style={{ backgroundColor: colors.primary, padding: 24,borderRadius: 32, flexGrow: 1, }}>
          <CircleBt>
            <ArrowUpRight strokeWidth={1.25} color='#262626' size={42}/>
          </CircleBt>
        </Column>

        <Spacer />

        <Column style={{ flexGrow: 1, }}>
          <Column style={{ backgroundColor: colors.secundary, padding: 24, height: 500, borderRadius: 32, flexGrow: 1, }}>
            <CircleBt>
                <ArrowUpRight strokeWidth={1.25} color='#262626' size={42}/>
              </CircleBt>
          </Column>
          <Spacer />
          <Row>
            <Column style={{ backgroundColor:"#262626", padding: 24, height: 200, borderRadius: 32, flexGrow: 1, }}>
            <CircleBt>
                <ArrowUpRight strokeWidth={1.25} color='#262626' size={42}/>
              </CircleBt>
            </Column>
            <Spacer />
            <Column style={{ backgroundColor: "#FFE2BA", padding: 24,  borderRadius: 32, flexGrow: 1, }}>
              <CircleBt>
                <ArrowUpRight strokeWidth={1.25} color='#262626' size={42}/>
              </CircleBt>
            </Column>
          </Row>
        </Column>

      </Row>



    </Main>
  );
}

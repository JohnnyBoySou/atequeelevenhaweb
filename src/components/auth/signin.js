'use client'
import React, { useState, useEffect } from 'react';
import { Column, Row, Main, Title, Label, OutBt, Spacer, } from '../../theme/global';
import Image from 'next/image';
const login = require('../../assets/imgs/login.png');
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from '../../app/api/firebase';
import { useRouter } from 'next/navigation';
import { getUser, setUser } from '../../hooks/useUser';

export default function Signin() {
    const [user, setuser] = useState([]);
    const router = useRouter();

    async function handleSinginGoogle(){
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
                setuser(result.user);
                setUser(result.user)
                setTimeout(() => {
                    router.push('/home')
                }, 1500);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const verify = async () => { 
        const userdate = await getUser();   
        if(userdate != undefined){
            setuser(userdate);
            setTimeout(() => {
                router.push('/home');
            }, 1500);
        }else{
            return;
        }
     }


    useEffect(() => {
        verify()
    }, []);

    return (
        <Main>
            <Column>
            <Column style={{ backgroundColor: "#FFF4EB", width: 400, borderRadius: 32, marginRight:20, border: '1px solid #20202020', borderRadius: 24, }}>
          <Image src={login} style={{objectFit: 'cover', borderRadius: 32,}} width={400} height={300} alt='login'/>
          <Label style={{ textAlign: 'center', margin: 20, }}>Uma nova maneira de vivenciar a palavra de Deus.</Label>
          <Column style={{ flexGrow: 1, backgroundColor: "#fff", padding: 20, borderBottomLeftRadius: 24,borderBottomRightRadius: 24, }}>
            <Title style={{ marginBottom: 8, }}>Entrar</Title>
            <Label>Faça login para aproveitar varias funções exclusivas.</Label>
            <Spacer />

            {user.length > 1 ? 
            <Column style={{ border: '2px solid #26262626' , borderRadius: 12, padding: 12, }}>

            <Row>
                <img src={user?.photoURL} width={56} height={56} alt='user' style={{ borderRadius: 12, }}/>
                <Column style={{ marginLeft: 12, justifyContent: 'center', }}>
                    <Title style={{ fontSize: 24, marginTop: -6, }}>{user?.displayName}</Title>
                    <Label style={{ fontSize: 18, marginTop: -6, }}>{user?.email}</Label>
                </Column>
            </Row>
            </Column>
             : 
            <OutBt onClick={handleSinginGoogle}>Entrar com Google</OutBt>
            }
          
          </Column>
        </Column>
            </Column>
        </Main>
    )
}
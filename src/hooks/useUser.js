'use client'

import React from 'react';

const getUser =  () => { 
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : undefined;
    }
 }

const deleteUser = () => { 
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        return true
    }
}

const setUser = ({user}) => { 
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
        return true
    }
 }

export { getUser, deleteUser, setUser }
 
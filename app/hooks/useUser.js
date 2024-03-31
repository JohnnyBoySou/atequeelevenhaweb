'use client';
const getUser = () => { 
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : {};
 }

const deleteUser = () => { 
    localStorage.removeItem('user');
    return true
}

export { getUser, deleteUser }
 
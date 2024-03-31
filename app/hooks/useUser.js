'use client';
const getUser = () => { 
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : undefined;
 }

const deleteUser = () => { 
    localStorage.removeItem('user');
    return true
}

const setUser = ({user}) => { 
    localStorage.setItem('user', JSON.stringify(user));
    return true
 }

export { getUser, deleteUser, setUser }
 
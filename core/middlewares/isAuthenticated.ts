import { decodeJwt } from 'jose';

export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    try {
        const decodedToken: any = decodeJwt(token);
        const userRoles = decodedToken?.roles || [];
        return userRoles.includes('ADMIN');
    } catch (error) {
        console.error('Error decodificando el token:', error);
        return false;
    }
};

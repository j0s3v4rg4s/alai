export function fireCode(code: string, defaultMsg?: string): string {
    switch (code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'Usuario o contraseña invalida';
        default:
            return defaultMsg ?? code;
    }
}

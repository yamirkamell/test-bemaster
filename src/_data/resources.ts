export const resources = {
    _login_label: { es: 'Inicia sesión', en: 'Log in' },
    _user_label: { es: 'Usuario', en: 'User' },
    _password_label: { es: 'Contraseña', en: 'Password' },
    _validate_login_label: { es: 'Usuario o Contraseña invalida', en: 'Invalid username or password' },
    _lost_password_label: { es: '¿Olvidaste tu contraseña?', en: 'Did you forget your password?' },
    _trends_label: { es: 'Tendencias', en: 'Trends' },
    _detail_label: { es: 'DETALLE', en: 'DETAIL' },
    _home_label: { es: 'INICIO', en: 'HOME' },
    _categories_label: { es: 'CATEGORIAS ', en: 'CATEGORIES' },
    _films_label: { es: 'PELICULAS ', en: 'FILMS' },
    _logout_label: { es: 'Cerrar sesión', en: 'Log out'}
}

export function retuResource(resource: any) {
    switch (window.navigator.language) {
        case 'es':
            return resource.es;
        case 'en':
            return resource.en;
        default:
            return resource.es;
    }
}
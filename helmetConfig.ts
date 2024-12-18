import { HelmetOptions } from "helmet";

export const helmetConfig: Readonly<HelmetOptions> = {
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "default-src": ["'self'"], // Solo recursos del dominio propio
            "img-src": ["'self'", "https:", "data:"], // Permitir imágenes base64 y externas HTTPS
            "script-src": [
                "'self'",
                "https://apis.google.com", // Scripts externos seguros
                "'unsafe-inline'", // Necesario para frameworks modernos, pero evítalo si es posible
            ],
            "style-src": [
                "'self'",
                "'unsafe-inline'", // Permite estilos inline necesarios para frameworks como React
                "https://fonts.googleapis.com", // Fuentes de Google
            ],
            "font-src": ["'self'", "https://fonts.gstatic.com"], // Fuentes externas
            "frame-src": ["'self'", "https://www.youtube.com"], // Permitir incrustaciones de YouTube
        },
    },
    crossOriginEmbedderPolicy: true, // Proteger contra incrustaciones no confiables
    crossOriginResourcePolicy: { policy: "same-origin" }, // Limitar acceso a recursos
    dnsPrefetchControl: { allow: false }, // Bloquear prefetching de DNS
    frameguard: { action: "sameorigin" }, // Permitir iframes solo desde el mismo origen
    hsts: {
        maxAge: 31536000, // Forzar HTTPS durante un año
        includeSubDomains: true, // Incluir subdominios en la política
        preload: true, // Añadir al programa HSTS Preload de navegadores
    },
    noSniff: true, // Evitar que el navegador adivine tipos MIME
    referrerPolicy: { policy: "strict-origin-when-cross-origin" }, // Controlar envío de encabezados Referrer
    xssFilter: true, // Protección básica contra XSS
};

import { parseConfig } from '../utils/parseConfig.util';

const config = parseConfig({
    globalPath: {
        info        : "Base path for example",
        default     : "/example/tc-example",
    },
    port: {
        info        : "Port for application",
        env         : "PORT",
        required    : true,
    },
    tokens: {
        tokenSecret: {
            info        : "Token Secret JWT",
            env         : "TOKEN_SECRET",
            required    : true,
        },
        tokenSesion: {
            info        : "Token Sesion",
            env         : "TOKEN_SESION",
            required    : true,
        },
    },
});

export default config;
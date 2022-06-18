declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string
        PORT: string
        DB_URI: string;
        REDIS_URI: string;
        MAIL_USER: string;
        MAIL_PASS: string;
    }
}
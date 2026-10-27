export const config = {
    db: {
        host: process.env.DATABASE_URL ?? "localhost",
        user: process.env.DATABASE_USER!,
        password: process.env.DATABASE_PASSWORD!,
        database: process.env.DATABASE_NAME!,
    },
    port: process.env.PORT
};
require('dotenv').config()

module.exports = {
    port: Number(process.env.PORT) || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3307,
        name: process.env.DB_NAME || 'user_api',
        user: process.env.DB_USER || 'test',
        pass: process.env.DB_PASS || '',
        logging: process.env.DB_LOGGING === 'true'
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'fdsgfhmkdslvnsjd',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    }
}
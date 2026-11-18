const sequelize = require('./src/db/sequelize')

sequelize.authenticate()
    .then(() => console.log('Kapcsolat OK'))
    .catch((err) => console.log('Hiba:', err.message))
    .finally(() => sequelize.close())
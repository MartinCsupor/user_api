const { sequelize } = require("../models");

(async () => {
    const force = process.argv.includes('--force')
    try {
        await sequelize.sync()
        console.log("Táblák szinkronizálva")
    } catch (err) {
        console.error('Sync hiba', err.message)
    } finally {
        await sequelize.close()
    }
})()
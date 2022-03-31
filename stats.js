const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os

    const freeMB = parseInt(freemem() / 1024 / 1024);
    const totalMB = parseInt(totalmem() / 1024 / 1014);
    const percentUsage = ((totalMB - freeMB) * 100) / totalMB;

    const stats = {
        Free: `${freeMB} MB`,
        Total: `${totalMB} MB`,
        Usage: `${percentUsage.toFixed(2)}%`
    }

    console.clear()
    console.log('====Computer Memory====')
    console.table(stats);

    log(`${JSON.stringify(stats)}`)
}, 1000);

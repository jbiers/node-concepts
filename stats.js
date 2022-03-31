const os = require('os')

setInterval(() => {
    const { freemem, totalmem } = os

    const freeMB = parseInt(freemem() / 1024 / 1024);
    const totalMB = parseInt(totalmem() / 1024 / 1014);
    const percentUsage = ((totalMB - freeMB) * 100) / totalMB;

    console.clear()
    console.log('====Computer Memory====')
    console.table({ Free: `${freeMB} MB`, Total: `${totalMB} MB`, Usage: `${percentUsage.toFixed(2)}%` });
}, 1000);

const os = require('os')

const { freemem, totalmem } = os

const freeMB = parseInt(freemem() / 1024 / 1024);
const totalMB = parseInt(totalmem() / 1024 / 1014);
const percentUsage = ((totalMB - freeMB) * 100) / totalMB;

console.table({ Free: freeMB, Total: totalMB, Usage: percentUsage });
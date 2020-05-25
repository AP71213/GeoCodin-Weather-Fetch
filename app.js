const geocoding = require('./utils/geoCodeutil').geocoding
const chalk = require('chalk')
if(process.argv[2])
    geocoding(process.argv[2])
else
    console.log(chalk.inverse("Please enter a valid location"))
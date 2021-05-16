const readline = require('readline-sync');

const { options } = require('./config/options');
const { getJob } = require('./jobs/getJob');

const verifyTheTmpFolderExists = require('./helpers/verifyTheTmpFolderExists');

verifyTheTmpFolderExists();

const descriptionOptions = options.map(option => option.description);

const indexOption = readline.keyInSelect(descriptionOptions, 'Choose an option: ');

if (indexOption === -1) {
  process.exit();
}

getJob(options[indexOption]);

console.log();

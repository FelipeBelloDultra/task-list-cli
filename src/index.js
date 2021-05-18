const readline = require('readline-sync');

const { options } = require('./config/options');
const { getJob } = require('./jobs/getJob');

require('./helpers/verifyTheTmpFolderExists')();

console.clear();

const descriptionOptions = options.map(option => option.description);

const indexOption = readline.keyInSelect(descriptionOptions, 'Choose an option: ');

if (indexOption === -1) {
  process.exit();
}

getJob(options[indexOption]);

console.log();

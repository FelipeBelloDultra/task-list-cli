const readline = require('readline-sync');
const fs = require('fs-extra');

const { tmpPath } = require('../config/tmpPath');

async function createANewTaskService() {
  console.log();

  const description = readline.question('Enter a description of the new task: ');

  const data = fs.readFileSync(tmpPath, 'utf-8');

  const dataArray = JSON.parse(data);

  const formatedData = {
    id: new Date().getTime(),
    todo: description,
    done: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  fs.writeFileSync(tmpPath, JSON.stringify([...dataArray, formatedData]));
}

module.exports = createANewTaskService;

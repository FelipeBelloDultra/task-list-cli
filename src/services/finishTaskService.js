const readline = require('readline-sync');
const fs = require('fs-extra');

const { tmpPath } = require('../config/tmpPath');

function finishTaskService() {
  console.log();

  const data = fs.readFileSync(tmpPath, 'utf-8');

  const jsonData = JSON.parse(data);

  if (jsonData.length === 0) {
    console.log('Your todo list is empty.');
    console.log();

    process.exit();
  }

  const newDataId = jsonData.map(item => `${item.id} - ${item.todo}`);

  const taskId = readline.keyInSelect(newDataId, 'Choose the id of the task you want to complete: ');
  console.log();

  jsonData[taskId].done = true;
  jsonData[taskId].updated_at = new Date().toISOString();

  console.table(jsonData);

  fs.writeFileSync(tmpPath, JSON.stringify(jsonData));
}

module.exports = finishTaskService;

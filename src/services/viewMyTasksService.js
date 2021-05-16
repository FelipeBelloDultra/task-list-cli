const fs = require('fs-extra');

const { tmpPath } = require('../config/tmpPath');

function viewMyTasksService() {
  console.log();

  const data = fs.readFileSync(tmpPath, 'utf-8');

  if (!data || JSON.parse(data).length === 0) {
    console.log('Your todo list is empty.');
    console.log();

    process.exit();
  }

  const formatedData = JSON.parse(data);

  console.table(formatedData);
}

module.exports = viewMyTasksService;

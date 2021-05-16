const viewMyTasksService = require('../services/viewMyTasksService');
const createANewTaskService = require('../services/createANewTaskService');
const finishTaskService = require('../services/finishTaskService');

function getJob(option) {
  switch (option.index) {
    case 0: // Create a task
      createANewTaskService();

      break;


    case 1: // View my tasks
      viewMyTasksService();

      break;


    case 2: // Finish a task
      finishTaskService();
      break;

    default:
      break;
  }
}

module.exports = { getJob };

const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw ( new Error ('some error message'));

  // only if debug mode is enabled, just for logging does it not fail
  core.debug('Debug message');
  core.warning('Debug message');
  core.error('Debug message');

  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log(`Hello ${name}`);

  const time = new Date().toTimeString();
  core.setOutput("time", time);

  core.startGroup('Logging github objecet');
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
  core.exportVariable('HELLO', 'Hello World from the variable');
} catch (error) {
  core.setFailed(error.message);
}

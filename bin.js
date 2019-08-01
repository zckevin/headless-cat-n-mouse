const cat_n_mouse = require('.');
const fs = require('fs');

// FIXME: confirm every individual detect works
function testDetects() {
  cat_n_mouse({includeEvasions: true, suppressLogs: true});
  // If any of the detects pass, then we conclude this is headless.
  // const wasHeadlessDetected = Object.values(results).some(Boolean);
  // console.assert(wasHeadlessDetected === true, 'Detections failed');
}
testDetects();

/*
async function testEvasions() {
  const results = await cat_n_mouse({includeEvasions: true});
  const wasHeadlessDetected = Object.values(results).some(Boolean);

  const result = wasHeadlessDetected
    ? 'Headless detection *succeeded*.\n🔍  Detectors are winning!'
    : 'Headless detection *failed*.\n😎  Evaders are winning!';
  console.log(`\n${result}`);
  // updateReadmeStatus(result);
}

Promise.resolve()
  .then(_ => testDetects())
  .then(_ => testEvasions())
  .catch(console.error);
*/

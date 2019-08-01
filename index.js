const puppeteer = require('puppeteer');

const applyEvasions = require('./apply-evasions');
const detectHeadless = require('./detect-headless');

async function run({includeEvasions = true, suppressLogs = false}) {
  const browser = await puppeteer.launch({
	  args: [ '--disable-gpu',
		  // '--single-process',
		  '--headless',
		  '--no-sandbox', '--remote-debugging-port=9222',
		  // '--js-flags="--allow-natives-syntax --log-api --logfile=%t.log',
		  '--user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"'
		  // '--disable-web-security', '--allow-running-insecure-content',
		  // '--unsafely-treat-insecure-origin-as-secure=http://192.168.123.137'
	  ],
	executablePath: "/home/sb/x64.debug/chrome",
	  headless: true,
	  dumpio: true,
  });
   const page = await browser.newPage();
   page.on('console', msg => {
     if (!suppressLogs) console.log('Page console: ', msg.text());
   });

   if (includeEvasions) await applyEvasions(page);
   await page.goto('https://toefl.neea.cn/login');
   if (includeEvasions) await applyEvasions(page);

	/*
  const detectionResults = await page.evaluate(detectHeadless);

  console.assert(Object.keys(detectionResults).length, 'No detection results returned.');
  */

  // await browser.close();
  return {};
}

module.exports = run;

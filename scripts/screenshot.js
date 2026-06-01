const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const screenshotsDir = path.join(__dirname, '../screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch();
  
  try {
    const page = await browser.newPage();
    await page.goto('https://duckduckgo.com/?ia=web&origin=funnel_home_website&t=h_&q=dogdogs');
    await page.screenshot({ path: path.join(screenshotsDir, 'google.png') });
    console.log('✓ Screenshot of Google saved');
  } catch (error) {
    console.error('Error taking screenshot:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

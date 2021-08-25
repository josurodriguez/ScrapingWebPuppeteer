const puppeteer = require('puppeteer')
const screenshot = 'shopping_walmart.png'
try {
  (async () => {
    const browser = await puppeteer.launch({headless: false})

    const page = await browser.newPage()

    await page.setViewport({ width: 1280, height: 800 })

    await page.goto('https://www.walmart.com/ip/Super-Mario-Odyssey-Nintendo-Switch/56011600', { waitUntil: 'networkidle2' })

    await page.click('button.prod-ProductCTA--primary')

    await page.waitForSelector('.Cart-PACModal-ItemInfoContainer')

    await page.screenshot({ path: screenshot })

    await browser.close()

  })()
} catch (err) {
  console.error(err)
}
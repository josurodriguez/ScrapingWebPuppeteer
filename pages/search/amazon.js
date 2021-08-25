const puppeteer = require('puppeteer')
const screenshot = 'amazon_nyan_cat_pullover.png'
try {
  (async () => {
    const browser = await puppeteer.launch({headless: false})

    const page = await browser.newPage()

    await page.setViewport({ width: 1280, height: 800 })

    await page.goto('https://www.amazon.com')

    await page.type('#twotabsearchtextbox', 'smartphones')

    await page.click('#nav-search-submit-button')
    
    await page.waitForSelector('.s-main-slot')

    await page.screenshot({ path: 'amazon_nyan_cat_pullovers_list.png' })

    await page.waitForTimeout(2000)
    
    await page.click('#nav-cart')

    await page.waitForTimeout(2000)

    await browser.close()

  })()
} catch (err) {
  console.error(err)
}
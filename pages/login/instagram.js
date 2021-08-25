const user = 'josue-el-kpo@hotmail.com'
const password = 'vivasanvicente'

const puppeteer = require('puppeteer')
const screenshot = 'instagram.png';
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  }) 

  await page.goto('https://www.instagram.com/accounts/login/?source=auth_switcher', {
    waitUntil: 'networkidle2'
  })

  await page.waitForSelector("[name='username']")

  await page.type("[name='username']", user)

  await page.keyboard.down('Tab')

  await page.keyboard.type(password)

  await page.keyboard.down('Tab')

  await page.keyboard.down('Tab')

  await page.keyboard.down('Enter');

  await page.waitForTimeout(2000)

  await page.screenshot({ path: screenshot })

  browser.close()
  console.log('See screenshot: ' + screenshot)
})()

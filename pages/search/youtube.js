const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      }) 

    await page.goto('https://www.youtube.com/');

    await page.type('#search', 'linkin park');

    await page.click('#search-icon-legacy');
    
    await page.waitForSelector('.style-scope ytd-item-section-renderer')
    
    await page.waitForTimeout(1000);

    const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('#video-title')
        const links = []

        for(let element of elements) {
            if(element.href){
            links.push(element.href);
        }
        }
        return links;
    });

    
    const videos = []
    for (let enlace of enlaces) {
        await page.goto(enlace)
        await page.waitForSelector('#container h1 yt-formatted-string')
        const video = {}
        video.title = await page.$eval('#container h1 yt-formatted-string', el => el.innerText)

        /*
            const video = await page.evaluate(() => {
                const tmp = {};
                tmp.title =  document.querySelector('#container h1 yt-formatted-string').innerText;
                
                return tmp
            });
            */
            videos.push(video)
    }

    console.log(videos) 

    await browser.close();
    
})();




const puppeteer = require('puppeteer')

async function count() {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const page = await browser.newPage()
    await page.goto('https://63pokupki.ru/search?q=%D0%BC%D0%B5%D0%B4&vars=&page=31&limit=30&tags=&orgs=&category=&sub_category=44&minprice=5&maxprice=18810&exclude_rows=false&exclude_adults=true&stop_soon=false&in_favorite=false&show_by_items=true&show_items_list=false&sort_by=0&modal_item_id=&show_full_view=true&by_brand=false&by_name=true')
    const title = await page.title()
    const url = await page.url() 
    const count = await page.$$eval('.SearchItemColM', element => element.length)
    console.log(`Number of items on the page = ${count}`)
    await browser.close()

}
count()
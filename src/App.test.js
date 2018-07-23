const puppeteer = require('puppeteer')

describe('Initial Tests', () => {
  let browser
  let page
  beforeEach(async () => {
    browser = await puppeteer.launch({})
    page = await browser.newPage()
  })
  test('should see title', async () => {
    await page.goto('http://localhost:3000/')
    const actual = await page.$eval('.App-title', el => el.innerHTML)
    const expected = 'Welcome to React'
    expect(actual).toEqual(expected)
  })
  afterEach(async () => {
    await browser.close()
  })
})

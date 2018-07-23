const puppeteer = require('puppeteer')

describe('Initial Tests', () => {
  let browser
  let page
  beforeEach(async () => {
    browser = await puppeteer.launch({
      // https://discuss.circleci.com/t/puppeteer-fails-on-circleci/22650/2
      args: ['-–no-sandbox', '--disable-setuid-sandbox']
    })
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

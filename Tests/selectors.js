module.exports ={
    "css and xpath": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html")
        browser.pause(1 * 1000)

        const cssSelector = "#text-input"
        const xPathSelector = '//*[@id="text-input"]'

        browser.setValue(cssSelector, "CSS")
        browser.pause(1 * 1000)
        browser.clearValue(cssSelector)

        browser.useXpath()
        browser.setValue(xPathSelector, "xPath")
        browser.pause(1 * 1000)
        browser.clearValue(xPathSelector)

        browser.useCss()
        browser.pause(1000)
        browser.setValue(cssSelector, "This is CSS again")
    }
}
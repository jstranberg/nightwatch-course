const LOGIN_URL = 'https://www.playposit.com/login'
const INSTRUCTOR_DASH = 'https://api.playposit.com/dash/instructor/My-Bulbs/My-Bulbs?page=1'

module.exports={
    "user login": function (browser) {
        browser
            .useXpath()
            .url(LOGIN_URL)
            .setValue('//*[@id="login-signup"]/div/form/div[1]/input', "SeijTranberg@gmail.com")
            .setValue('//*[@id="login-signup"]/div/form/div[2]/input', "###")
            .click('//*[@id="login-signup"]/div/form/div[3]/button')
            .assert.urlContains(
                INSTRUCTOR_DASH, 
                "Homeage Url contains './My-Bulbs'")
            .assert.containsText(
                "//li[@aria-label='Hot link button back to My Bulbs. Press enter to go back to My Bulbs.']", 
                "My Bulbs", 
                "Login Success"
                )
    },
    
    "Create a bulb": function (browser) {
           browser
                .url(INSTRUCTOR_DASH, "Navigate to Instructor Dash") 
                .click("//div[normalize-space()='Add New Bulb']")
                .assert.urlContains("/designer", "Url open in new tab")
    }       

}
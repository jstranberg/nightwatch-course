const LOGIN_URL = 'https://www.playposit.com/login'
const INSTRUCTOR_DASH = 'https://api.playposit.com/dash/instructor/My-Bulbs/My-Bulbs?page=1'
const FOLDERS_URL = 'https://api.playposit.com/dash/instructor/Folders/Folders?page=1'
const PREMADE_BULBS_URL = "https://api.playposit.com/dash/instructor/Premade-Bulbs"
const PL_CLASSES_URL = "https://api.playposit.com/dash/learner/Learner/Classes?page=1"
const CLASSES_URL = "https://api.playposit.com/dash/instructor/Classes/Classes?page=1"


module.exports = {
    "user login": function (browser) {
        browser
            .useXpath()
            .url(LOGIN_URL)
            .setValue('//*[@id="login-signup"]/div/form/div[1]/input', "SeijTranberg@gmail.com")
            .setValue('//*[@id="login-signup"]/div/form/div[2]/input', "L$6$Fiyx2yDtV6u3O")
            .click('//*[@id="login-signup"]/div/form/div[3]/button')
            .assert.urlContains(
                INSTRUCTOR_DASH, 
                "Homeage Url contains './My-Bulbs'")
            .assert.containsText(
                "//li[@aria-label='Hot link button back to My Bulbs. Press enter to go back to My Bulbs.']", 
                "My Bulbs", 
                "Bulb message pass"
                )
    },

    "Check Folders tab": function(browser){
        browser.click("//i[@class='v-icon material-icons theme--light white--text'][normalize-space()='folder']")
        browser.click("//div[normalize-space()='Folders']")
            .assert.urlContains(
                FOLDERS_URL, 
                "Folders Url contains './Folders?page=1'"
                )
            .assert.containsText(
                "//li[@aria-label='Hot link button back to Folders. Press enter to go back to Folders.']", 
                "Folders",
                "Title contains 'Folders' and aria label"
                )
    },

    "Check classes tab": function (browser) {
        browser.click("//i[normalize-space()='folder_shared']")
        browser.click("//div[@class='v-list__tile__title side-nav-title'][normalize-space()='Classes']")
            .assert.urlContains(
                CLASSES_URL,
                "Classes Url contains './Classes?page=1'", 
                )
            .assert.containsText(
                "//li[@aria-label='Hot link button back to Classes. Press enter to go back to Classes.']", 
                "Classes", 
                "Title contains 'Classes' and aria label"
                )
    },
    

    "Premade bulbs": function (browser) {
        browser.click("//i[normalize-space()='play_circle_outline']")
        browser.click("//div[@class='v-list__tile__title side-nav-title'][normalize-space()='Premade Bulbs']")
            .assert.urlContains(PREMADE_BULBS_URL, 
            "Classes Url contains './Premade-Bulbs'", 
                )
           .assert.containsText(
                "//li[@aria-label='Hot link button back to Premade Bulbs. Press enter to go back to Premade Bulbs.']", 
                "Premade Bulbs", 
                "Title contains 'Premade Bulbs' and aria label"
                )
    },
    
    "Professional learning": function (browser) {
        browser.click("//i[@class='v-icon material-icons theme--light active-icon']")
        browser.click("//div[normalize-space()='Professional Learning']")
            .assert.urlContains(PL_CLASSES_URL, 
                "Professional Learning Url contains './dash/learner/'"
                )
            .assert.containsText(
                "//li[@aria-label=\"Hot link button back to Seijin's Classes. Press enter to go back to Seijin's Classes.\"]", 
                "Seijin's Classes", 
                "Title contains '{Instructor's Name} Classes' and aria label"
                )
    }
    
}


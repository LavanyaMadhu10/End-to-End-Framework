import {Page,Locator} from '@playwright/test';
import data from "../DDT/userdata.json"
import { getRandomEmail } from "../utils/utility"

class Register{
    page:Page
    signupName:Locator
    signupEmail:Locator
    signupButton:Locator

    gender:Locator
    password:Locator
    days:Locator
    month:Locator
    year:Locator

    firstName:Locator
    lastName:Locator
    company:Locator
    address:Locator
    country:Locator
    state:Locator
    city:Locator
    zipcode:Locator
    mobileNumber:Locator

    createAccountButton:Locator
    continueButton:Locator

    constructor(page:Page){
        this.page=page
        this.signupName=page.locator('//input[@data-qa="signup-name"]')
        this.signupEmail=page.getByPlaceholder("Email Address",{exact:true}).last()
        this.signupButton=page.locator('//button[@data-qa="signup-button"]')

        this.gender=page.locator('#id_gender1')
        this.password=page.locator('//input[@data-qa="password"]')
        this.days=page.locator('#days')
        this.month=page.locator('#months')
        this.year=page.locator('#years')

        this.firstName=page.locator('#first_name')
        this.lastName=page.locator('#last_name')
        this.company=page.locator('#company')
        this.address=page.locator('#address1')
        this.country=page.locator('#country')
        this.state=page.locator('#state')
        this.city=page.locator('#city')
        this.zipcode=page.locator('#zipcode')
        this.mobileNumber=page.locator('#mobile_number')

        this.createAccountButton=page.locator('//button[@data-qa="create-account"]')
        this.continueButton=page.locator('//a[@data-qa="continue-button"]')
    }

    async navigateToRegister(){
        await this.page.goto("https://automationexercise.com/login")
    }

    async enterSignupDetails(){
        await this.signupName.fill(data.name)
        let email= await getRandomEmail(10)
        await this.signupEmail.fill(email)
        await this.signupButton.click()
    }

    async fillAccountDetails(){
        await this.gender.check()
        await this.password.fill(data.password)
        await this.days.selectOption({label:data.day})
        await this.month.selectOption({label:data.month})
        await this.year.selectOption({label:data.year})
        await this.firstName.fill(data.firstName)
        await this.lastName.fill(data.lastName)
        await this.company.fill(data.company)
        await this.address.fill(data.address)
        await this.country.selectOption({label:data.country})
        await this.state.fill(data.state)
        await this.city.fill(data.city)
        await this.zipcode.fill(data.zipcode)
        await this.mobileNumber.fill(data.mobile)
        await this.createAccountButton.click()
        await this.continueButton.click()
    }

}

export default Register
    
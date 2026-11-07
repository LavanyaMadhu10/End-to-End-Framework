import { Locator,Page } from '@playwright/test';

class Cart{
    page:Page
    cartLink:Locator
    proceedToCheckoutBTN:Locator

    constructor(page:Page){
        this.page=page
        this.cartLink=page.locator('(//a[@href="/view_cart"])[1]')
        this.proceedToCheckoutBTN=page.locator('.btn.btn-default.check_out')
    }

    async proceedToCheckout(){
        await this.cartLink.click()
        await this.proceedToCheckoutBTN.click()
    }

}
export default Cart
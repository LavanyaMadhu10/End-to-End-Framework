import { Locator,Page } from "@playwright/test";
import data from "../DDT/userdata.json"


class Product{
    page:Page
    productsLink:Locator
    searchProductTF:Locator
    searchBTN:Locator
    viewProductLink:Locator
    addTocartBTN:Locator
    continueShoppingBTN:Locator

    constructor(page:Page){
        this.page=page
        this.productsLink=page.locator('//a[@href="/products"]')
        this.searchProductTF=page.locator('input#search_product')
        this.searchBTN=page.locator('button#submit_search')
        this.viewProductLink=page.locator('//a[@href="/product_details/1"]')
        this.addTocartBTN=page.locator('//button[@class="btn btn-default cart"]')
        this.continueShoppingBTN=page.getByRole('button',{name:"Continue Shopping",exact:true})
    }

    async addToCart(){
        await this.productsLink.click()
        await this.searchProductTF.fill(data.productName)
        await this.searchBTN.click()
        await this.viewProductLink.click()
        await this.addTocartBTN.click()
        await this.continueShoppingBTN.click()
    }

}


export default Product
import { test, expect } from '@playwright/test';
import register from '../POM/Registerpage.page';
import product from '../POM/ProductPage.page';
import cart from '../POM/Cartpage.page';
import checkout from '../POM/CheckoutPage.page';

test("purchase product",async({page})=>{
  let registerPage=new register(page)
  let productPage=new product(page)
  let cartPage=new cart(page)
  let checkoutPage=new checkout(page)

  await registerPage.navigateToRegister()
  await registerPage.enterSignupDetails()
  await registerPage.fillAccountDetails()

  await productPage.addToCart()
  await cartPage.proceedToCheckout()
  await checkoutPage.checkout()
  await checkoutPage.verifyOrderMessage()
  await checkoutPage.InvoiceDownload()
})

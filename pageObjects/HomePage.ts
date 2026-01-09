import {Page,Locator} from "@playwright/test"
import { threadCpuUsage } from "process";

export class HomePage{
    private readonly page:Page;
    private readonly productList:Promise<Array<Locator>>;
    private readonly productListLocator:string;
    private readonly addToCartButton:Locator;
    private readonly cartLink:Locator;


    constructor(page:Page){
        this.page=page;

        //CSS selector targetting all product links under the product cards
        this.productList=  page.locator('div#tbodyid h4 a').all();

        // add to cart button(exact mathch using the product cards)

        this.addToCartButton=this.page.getByText('Add to cart');

        // cart link in the top menu

        this.cartLink=this.page.locator("#cartur");

        // Method to add a specific product to cart

    }

    // Method to add a pescific product to cart
     async addProductToCart(productName:string):Promise<void>{
         const productElements = await this.productList;
         for(const product of productElements){
            const name = await product.textContent();
            if(name?.trim()===productName){
                await product.click();
                break;
            }
         }
         // Handle alert/dialog after clicking 'Add to cart'
         this.page.once('dialog',async dialog=>{

            if(dialog.message().includes('added')){
                await dialog.accept();
            }
         })
         await this.addToCartButton.click()
     }

     
    
     // Methods to navigate to the cart

     async goToCart(){
         await this.cartLink.click();
     }


}
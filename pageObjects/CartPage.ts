import { Locator, Page } from "@playwright/test";


export class  CartPage{

    private page:Page;
    private productNamesInCartSelector:Promise<Array<Locator>>;

    constructor(page:Page){
        this.page=page;

        this.productNamesInCartSelector=page.locator('#tbodyid tr td:nth-child(2)').all();
    }

    // Method to check if a spefic product is present in the cart

    async checkProductInCart(productName:string):Promise<boolean>
    {
        const products = await this.productNamesInCartSelector;

        for(const product of products){
          //  await this.page.waitForTimeout(2000);
            const name = (await product.textContent())?.trim();
            console.log(name);

            if(name===productName){
                return true;
            }
        }

        return false;
    }

}
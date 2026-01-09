import {Page,Locator,expect } from "@playwright/test";
import { threadCpuUsage } from "process";

export class LoginPage{

    // define the variables
   private readonly  page:Page;
   private readonly loginLink:Locator;
   private readonly usernameInput:Locator;
   private readonly passwordInput:Locator;
   private readonly loginBtn:Locator;
    // constructor
    constructor(page:Page){
     this.page=page;
     this.loginLink=this.page.locator("#login2");
     this.usernameInput=this.page.locator("#loginusername");
     this.passwordInput=this.page.locator("#loginpassword");
     this.loginBtn=this.page.locator("button[onclick='logIn()']");
     
    }
    // actions methods

    async clickLoginLink():Promise<void>{
        await this.loginLink.click();
    }

    async enterUsername(uername:string):Promise<void>{
     //   await this.usernameInput.click();
        await this.usernameInput.clear();
        await this.usernameInput.fill(uername);
    }

    async enterPassword(pass:string):Promise<void>{
    //    await this.passwordInput.click()
        await this.passwordInput.clear();
        await this.passwordInput.fill(pass);
    }
    async clikOnLoginBtn():Promise<void>{
        await this.loginBtn.click();
       
    }

    async performLogin(usename:string,pass:string){
        await this.clickLoginLink();
        await this.enterUsername(usename);
        await this.enterPassword(pass);
        await this.clikOnLoginBtn();

    }



}
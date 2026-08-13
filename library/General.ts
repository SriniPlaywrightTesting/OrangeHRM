import { global } from '../library/Global';

// This file is created with all User-Definded methods/ functions related to entire Project

export class general extends global
{

    async launch_OHRM_Application()
    {
        await this.page.goto(this.applicationUrlAddress);
        console.log('OrangeHRM Appliction Launched');
    }

    async login_OHMR_Appliction()
    {
        await this.page.locator(this.userName_textBox).fill(this.userNameTestData);
        await this.page.locator(this.password_textBox).fill(this.passwordTestData);
        await this.page.locator(this.loginButton).click();

        console.log("LogIn Successful");

    }

    async logOut_OHRM_Application()
    {
        await this.page.locator(this.logout_link).click();
        console.log('LogOut Successful');

    }

    async waitStatement()
    {
        await this.page.waitForTimeout(1000);

    }


    async add_NewEmployee()
    {
        let frame = this.page.frameLocator(this.pageFrameProperty);
        console.log('Identified Frame of the Homepage');

        await frame.locator(this.addEmployeeButtonProperty).click();
        console.log('Add Employee button Click Successfull');

        console.log('Creating an Employee in the Application')
        await frame.locator(this.firstNameProperty).fill('Shekhar');
        await frame.locator(this.lastNameProperty).fill('Hyderabad');
        await frame.locator(this.txtEmpMiddleNameProperty).fill('Testing');

        await frame.locator(this.saveButtonProperty).click();


    }

}

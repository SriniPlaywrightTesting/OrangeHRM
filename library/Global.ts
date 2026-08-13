import {Locator, Page} from '@playwright/test';

export class global
{

    // creating a constructor for Page
    //  The 'page' reference is used across the complete Project, so creating a Constructor

    // Constructor need to be called always - automatically it will be executed whenever
    //    object reference is created
    constructor(public page : Page)
    {

    }


    public applicationUrlAddress : string ='http://127.0.0.1/orangehrm-2.5.0.5/login.php';
    public userNameTestData : string ='Srini';
    public passwordTestData : string ='loginIT';

    // Identifying Elements Properties
// name="txtUserName"
public userName_textBox : string = "//input[@name='txtUserName']"; 
// name="txtPassword"
public password_textBox : string = "//input[@name='txtPassword']"; 
// value="Login"
public loginButton : string = "//input[@value='Login']"; 


// <a href="./index.php?ACT=logout" target="rightMenu">Logout</a>
public logout_link : string = "//a[text()='Logout']";

// //*[@id="option-menu"]/li[3]/a
// public logout_link : string = "//*[@id='option-menu']/li[3]/a";


// Add Employee - Functionality
// Identifying the Frame of the WebPage
// name="rightMenu"
 public pageFrameProperty : string  =  "//iframe[@name='rightMenu']";

//value="Add"
public addEmployeeButtonProperty : string = "//input[@value='Add']";

// id="txtEmpFirstName"
public firstNameProperty : string  =  "//input[@id='txtEmpFirstName']";

// id="txtEmpLastName"
public lastNameProperty : string  =  "//input[@id='txtEmpLastName']";

// id="txtEmpMiddleName"
public txtEmpMiddleNameProperty : string  =  "//input[@id='txtEmpMiddleName']";

// id="btnEdit"
public saveButtonProperty : string  =  "//input[@id='btnEdit']";

}


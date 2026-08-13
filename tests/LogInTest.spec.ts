import {test} from '@playwright/test';
import { general } from '../library/general';

test('@Smoke_OHRM LogIn Test',async ({page}) =>
{
    
    let obj = new general(page);

    await obj.launch_OHRM_Application();
    await obj.login_OHMR_Appliction();
    await obj.waitStatement();
    await obj.logOut_OHRM_Application();
     await obj.waitStatement();



})
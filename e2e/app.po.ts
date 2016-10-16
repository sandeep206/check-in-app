import { browser, element, by } from 'protractor';

export class CHECKINAPPPage {
  navigateTo() {
    return browser.get('/');
  } 

  getBookingCode() {
    return element(by.name('bookingcode'));
  }

   getFamilyName() {
    return element(by.name('familyname'));
  } 

   getSubmitBtn() { 
    return element( by.css('[type="submit"]') );
  }


}

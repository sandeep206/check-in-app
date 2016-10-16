import { CHECKINAPPPage } from './app.po';

describe('check-in-app App', function() {
  
  let page: CHECKINAPPPage;

  beforeEach(() => {
    page = new CHECKINAPPPage();
  });


it('should find an element with BookingCode as textbox', () => {

	page.navigateTo();  
    
    page.getBookingCode().clear(); 
 	expect(page.getBookingCode().getText()).toEqual('');

 	 let name = page.getBookingCode();
 	 name.sendKeys('ABC111'); 
 	expect(name.getAttribute('value')).toEqual('ABC111'); 
 	 
}); 

it('should find an element with FamilyName as textbox', () => {

	page.navigateTo();  
    
    page.getFamilyName().clear(); 
 	expect(page.getFamilyName().getText()).toEqual('');

 	 let name = page.getFamilyName();
 	 name.sendKeys('John Doe'); 
 	expect(name.getAttribute('value')).toEqual('John Doe'); 
 	 
}); 
  

it('should verify submit button as disabled with empty FamilyName textbox', () => {

	page.navigateTo(); 

    page.getBookingCode().sendKeys('ABC111');
    page.getFamilyName().sendKeys(''); 
 	
 	expect(page.getSubmitBtn().isEnabled()).toBe(false);   
}); 

it('should verify submit button as disabled with empty BookingCode textbox', () => {

	page.navigateTo(); 

    page.getBookingCode().sendKeys('');
    page.getFamilyName().sendKeys('John Doe'); 
 	
 	expect(page.getSubmitBtn().isEnabled()).toBe(false);   
});

it('should verify submit button as disabled with empty textboxes', () => {

	page.navigateTo(); 

    page.getBookingCode().sendKeys('');
    page.getFamilyName().sendKeys(''); 
 	
 	expect(page.getSubmitBtn().isEnabled()).toBe(false);   
});

 
it('should enable submit button', () => {

	page.navigateTo(); 

    page.getBookingCode().sendKeys('ABC111');
    page.getFamilyName().sendKeys('John Doe'); 
 	
 	expect(page.getSubmitBtn().isEnabled()).toBe(true);   
});  

});

 
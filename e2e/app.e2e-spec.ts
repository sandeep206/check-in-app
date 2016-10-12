import { CHECKINAPPPage } from './app.po';

describe('check-in-app App', function() {
  let page: CHECKINAPPPage;

  beforeEach(() => {
    page = new CHECKINAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AngularFinalPage } from './app.po';

describe('angular-final App', function() {
  let page: AngularFinalPage;

  beforeEach(() => {
    page = new AngularFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

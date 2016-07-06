import { Angular2AuthRoutingPage } from './app.po';

describe('angular2-auth-routing App', function() {
  let page: Angular2AuthRoutingPage;

  beforeEach(() => {
    page = new Angular2AuthRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { LinkstoPage } from './app.po';

describe('linksto App', function() {
  let page: LinkstoPage;

  beforeEach(() => {
    page = new LinkstoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

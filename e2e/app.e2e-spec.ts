import { Ng2BasicsPage } from './app.po';

describe('ng2-basics App', () => {
  let page: Ng2BasicsPage;

  beforeEach(() => {
    page = new Ng2BasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

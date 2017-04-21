import { KursWalutPage } from './app.po';

describe('kurs-walut App', () => {
  let page: KursWalutPage;

  beforeEach(() => {
    page = new KursWalutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

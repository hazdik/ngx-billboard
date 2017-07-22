import { DemoNgxBillboardPage } from './app.po';

describe('demo-ngx-billboard App', () => {
  let page: DemoNgxBillboardPage;

  beforeEach(() => {
    page = new DemoNgxBillboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

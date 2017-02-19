import { AppCalandraPage } from './app.po';

describe('app-calandra App', function() {
  let page: AppCalandraPage;

  beforeEach(() => {
    page = new AppCalandraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

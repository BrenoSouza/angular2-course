import { CursoPage } from './app.po';

describe('curso App', () => {
  let page: CursoPage;

  beforeEach(() => {
    page = new CursoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

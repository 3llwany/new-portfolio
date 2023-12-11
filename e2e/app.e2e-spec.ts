import { portfolioPage } from './app.po';

describe('portfolio App', () => {
  let page: portfolioPage;

  beforeEach(() => {
    page = new portfolioPage();
  });

  it('should expect true to be true', () => {
    expect(true).toBe(true);
  });
});

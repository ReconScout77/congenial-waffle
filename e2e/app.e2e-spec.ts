import { SanityChallengePage } from './app.po';

describe('sanity-challenge App', () => {
  let page: SanityChallengePage;

  beforeEach(() => {
    page = new SanityChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

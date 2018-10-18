import { MusicPage } from './app.po';

describe('music App', () => {
  let page: MusicPage;

  beforeEach(() => {
    page = new MusicPage();
  });

  it('should make a basic request', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toMatch(`Spotify`);
    page.searchFor(`Miles Davis Kind of Blue`);

    // track
    page.clickLinkText(`So What`);
    expect(page.getTrackHeaderText()).toMatch(`So What`);
    page.clickLinkText(`Back`);
    
  });
;
});

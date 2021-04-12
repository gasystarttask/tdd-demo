import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { USMOCK } from './app.model';

describe('workspace-project App', () => {
  let page: AppPage;
  const liste = USMOCK;

  beforeEach(() => {
    page = new AppPage();
  });

  it('doit afficher le titre', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Liste des \'User stories\'');
  });

  it('Doit afficher la liste des US', async() => {
    await page.navigateTo();
    expect(await page.countUs()).toBe(liste.length);
    await page.getListeText().then(async items => {
      for (let i = 0; i < liste.length; i++) {
        // expect((await items[i].getText()).split(' ').join(''))
        // .toEqual(JSON.stringify(liste[i]).split(' ').join(''));
        expect((await items[i].getText()).trim())
        .toEqual(`${liste[i].titre}: ${liste[i].description} (${liste[i].complexite})`)
      }
    })
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

const LoginPage = require('../pageobjects/login.page');
const PromotionPage = require('../pageobjects/promotion.page');

describe("Promotion for birthday tests", () => {
  
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi');
  });
  
  afterEach(async () => {
    await browser.reloadSession();
  })
  
  it('Create a promotion for birthdays', async () => {
    await PromotionPage.goToPromotionPage();
    await expect(browser).toHaveUrlContaining('promotions');
    await PromotionPage.openFirstPromotion();
    await browser.pause(3000);
    await PromotionPage.fillBirthdayPromotionForm();
    await browser.pause(3000);
    await PromotionPage.saveBirthdayPromotion();
    await browser.pause(3000);
  })
  
})
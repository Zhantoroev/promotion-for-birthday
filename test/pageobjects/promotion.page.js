const Page = require('./page');

class PromotionPage extends Page {
  get promotionLink () {
    return $('a[href="/promotions"]');
  }

  get firstPromotionRow () {
    return $('span.promotion-data__arrow');
  }

  get daysBeforeInput () {
    return $('input[formcontrolname=daysBefore]');
  }

  get daysAfterInput () {
    return $('input[formcontrolname=daysAfter]');
  }

  get countOfUseInput () {
    return $('input[formcontrolname=countOfUse]');
  }

  get submitButton () {
    return $('button[type="submit"]');
  }

  async goToPromotionPage () {
    await this.promotionLink.click();
    await browser.pause(3000);
  }

  async openFirstPromotion () {
    await this.firstPromotionRow.click();
  }

  async fillBirthdayPromotionForm () {
    await this.daysBeforeInput.setValue(2);
    await this.daysAfterInput.setValue(10);
    await this.countOfUseInput.setValue(1);
  }

  async saveBirthdayPromotion () {
    await this.submitButton.click();
    const confirmModal = await $('mat-dialog-container[role=dialog]');
    await expect(confirmModal).toExist();
  }
} 

module.exports = new PromotionPage();

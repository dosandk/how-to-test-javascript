describe('RangePicker', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:9000');
  });

  it('should have correct "from" and "to" dates', async () => {
    await expect(page).toMatch('02.10.2019');
    await expect(page).toMatch('05.11.2019');
  });
});

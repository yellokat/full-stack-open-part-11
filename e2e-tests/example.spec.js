const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('can navigate from front page to detail page', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await page.getByText('ivysaur').click()
    await expect(page.getByText('chlorophyll', { exact:false })).toBeVisible()
    await expect(page.getByText('overgrow', { exact:false })).toBeVisible()
  })
})
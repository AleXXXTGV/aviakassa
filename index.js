const { chromium } = require('@playwright/test');

        (async () => {
            const browser = await chromium.launch({
                headless: true
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto('https://www.sellingplatformconnect.amadeus.com/login/?e=j&refreshOnError=true');
            await page.getByLabel('Имя пользователя*').click();
            await page.getByLabel('Имя пользователя*').fill('D.KAZIMOV');
            await page.getByLabel('Идентификатор офиса*').click();
            await page.getByLabel('Идентификатор офиса*').fill('SKDKZ27UJ');
            await page.getByLabel('Пароль*').click();
            await page.getByLabel('Пароль*').fill('AMADEUS7');
            await page.getByRole('button', { name: 'Выполнить вход' }).click();
            await page.getByLabel('Пароль*', { exact: true }).click();
            await page.getByLabel('Пароль*', { exact: true }).fill('AMADEUS7');
            const page1 = await context.newPage();
            await page1.goto('https://mail.ru/');
            await page1.getByTestId('enter-mail-primary').click();
            await page1.frameLocator('.ag-popup__frame__layout__iframe').locator('[data-test-id="domain-select"]').getByRole('img').click();
            await page1.frameLocator('.ag-popup__frame__layout__iframe').locator('[data-test-id="select-value\\:list\\.ru"]').getByText('@list.ru').click();
            await page1.frameLocator('.ag-popup__frame__layout__iframe').getByPlaceholder('Имя аккаунта').click();
            await page1.frameLocator('.ag-popup__frame__layout__iframe').getByPlaceholder('Имя аккаунта').fill('dkozimov');
            await page1.frameLocator('.ag-popup__frame__layout__iframe').locator('[data-test-id="next-button"]').click();
            await page1.frameLocator('.ag-popup__frame__layout__iframe').getByPlaceholder('Пароль').click();
            await page1.frameLocator('.ag-popup__frame__layout__iframe').getByPlaceholder('Пароль').fill('Damik5949');
            await page1.frameLocator('.ag-popup__frame__layout__iframe').locator('[data-test-id="submit-button"]').click();
            //   await page1.getByRole('link', { name: 'Пометить прочитанным Amadeus Security Service Пометить флажком 18 One-time password on PRODUCTION (PRD) Dear DAMIR KAZIMOV, You have requested a one-time password. You need to enter this one-time password Учётные записи 13:11' }).click();
            //   await page1.getByText('AY6KUE').click();
            await page1.close();
            await page.getByLabel('Разовый пароль*').click();
            //   await page.getByLabel('Разовый пароль*').fill('AY6KUE');
            await page.getByRole('button', { name: 'Выполнить вход' }).click();
            //   await page.getByRole('button', { name: 'Принудительный вход в систему' }).click();
            await page.getByRole('button', { name: 'Принять' }).click();
            await page.getByRole('button', { name: 'Новая командная страница' }).click();
            await page.getByLabel('Line for cryptic commands').click();
            await page.getByLabel('Line for cryptic commands').fill('an/10octmadmex/aam002');

            // ---------------------
            await context.close();
            await browser.close();
        })();
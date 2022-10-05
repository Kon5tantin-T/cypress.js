
describe('Для qa.studio', function () {
   it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type('trifonov@yandex.ru').type('{enter}');
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
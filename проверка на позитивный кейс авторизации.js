
describe('Для qa.studio', function () {
   it('Проверка позитивного кейса авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1').type('{enter}');
         cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
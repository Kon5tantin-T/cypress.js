describe('Для qa.studio', function () {
   it('Проверка негативного кейса авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio').type('{enter}');
         cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
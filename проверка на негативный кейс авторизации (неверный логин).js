describe('Для qa.studio', function () {
   it('Проверка негативного кейса авторизации c неправильным логином', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('student@qa.studio');
        cy.get('#pass').type('iLoveqastudio1').type('{enter}');
         cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
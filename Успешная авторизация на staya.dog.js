describe('Для staya.dog', function () {
   it('Проверка позитивного кейса авторизации на staya.dog', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('trifonovkm2015@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('qwe123').type('{enter}');
        cy.contains('Мои заказы');
    })
})
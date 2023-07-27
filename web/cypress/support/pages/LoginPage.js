
class LoginPage {

    doLogin(user) {
        cy.visit('http://localhost:3000')
        if (user.email) {
            cy.get('input[name=email]').type(user.mail)
        }
        if (user.password) {
            cy.get('input[name=password]').type(user.password)
        }
        cy.contains('button', 'Entrar').click()
        
    }
}

 export default new LoginPage


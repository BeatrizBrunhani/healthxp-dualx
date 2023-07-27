import users from '../fixtures/users.json'

import LoginPage from '../support/pages/LoginPage'

describe('login', () => {

    
    it.only('deve logar com o perfil do admin', ()=> {

        const user = users.admin

        const login = LoginPage()
        
        login.doLogin(user)

        // cy.doLogin(user)
        cy.contains('aside .logged-user', 'Olá, ' + user.name)
            .should('be.visible')
     
    })

    it('não deve logar email não cadastrado', ()=> {
        const user = users.email_not_found

        cy.doLogin(user)
        cy.popUpHave('Suas credenciais são inválidas, por favor tente novamente!')
        .should('be.visible')

    })

    it('não deve logar com email não cadastrado', ()=> {
        const user = users.email_not_found

        cy.doLogin(user)

        cy.popUpHave('Suas credenciais são inválidas, por favor tente novamente!')
        .should('be.visible')
    })

    it('não deve logar com email incorreto', ()=> {
        const user = users.inv_email
        cy.doLogin(user)
        cy.popUpHave('Insira um email válido.')
        .should('be.visible')
    })

    it('não deve logar com email em branco', ()=> {
        const user = users.empty_email
        
        cy.doLogin(user)

        cy.popUpHave('Os campos email e senha são obrigatórios.')
        .should('be.visible')
    })

    it('não deve logar com senha em branco', ()=> {
        const user = users.empty_pass
        cy.doLogin(user)

        cy.popUpHave('Os campos email e senha são obrigatórios.')
        .should('be.visible')

        // cy.contains('button', 'logar').click()
    })

 })

 


             // cy.get('input[name=email]').type(email)
        // cy.get('input[name=password]').type(password)
        // cy.contains('button', 'Entrar').click()
    // cy.visit('http://localhost:3000')
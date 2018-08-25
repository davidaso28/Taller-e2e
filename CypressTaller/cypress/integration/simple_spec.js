describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})

describe('Crear cuenta', function() {
    it('Creación cuenta', function() {
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("David")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Saavedra")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("da.saavedra@uniandes.edu.co")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("universidad-de-los-andes")
      cy.get('.cajaSignUp').find('[type="checkbox"]').first().check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("16")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("1234567a")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Verifica tu correo')
    })
})
describe('Los estudiantes login correcto', function() {
    it('Login correcto', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("da.saavedra@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234567a")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.wait(4000)

    })
})
    describe('Busqueda profesor', function() {
        it('Busqueda profesor', function() {

          cy.get('.Select-control').click()
          cy.get('input[role="combobox"]').first().click({force:true}).type("Mario villamizar",{force:true})


        })
})

describe('Filtros', function() {
    it('Filtros', function() {
      cy.get('.Select-control').click()
      cy.get('.roundedPicture').first().click({force:true})
      cy.wait(1000)
      cy.get('.statsProfesorDropdownItemChecked').find('[type="checkbox"]').first().check();

    })

})

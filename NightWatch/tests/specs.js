module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login falied': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
      .setValue('.cajaLogIn input[name="password"]', '1234')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('.aviso.alert.alert-danger', 4000)
      .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
      .end();
  },

  'Registro': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaSignUp input[name="nombre"]', 'David')
      .setValue('.cajaSignUp input[name="apellido"]', 'Saavedra')
      .setValue('.cajaSignUp input[name="correo"]', 'david.saavedra@mail.escuelaing.edu.co')
      .click('.cajaSignUp input[type="checkbox"]')
      .click('.cajaSignUp select[name="idPrograma"]')
      .waitForElementVisible('.cajaSignUp option[value="16"]', 4000)
      .click('.cajaSignUp option[value="16"]')
      .setValue('.cajaSignUp input[name="password"]', '12344567a')
      .click('.cajaSignUp input[name="acepta"]')
      .click('.cajaSignUp .logInButton')
      .waitForElementVisible('.sweet-alert', 4000)
      .assert.containsText('.sweet-alert h2', 'Registro exitoso!')
      .end();
  },
  'Busqueda profesor ': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'da.saavedra@uniandes.edu.co')
      .setValue('.cajaLogIn input[name="password"]', '1234567a')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('input[role="combobox"]', 4000)
      .click('input[role="combobox"]')
      .setValue('input[role="combobox"]','Mario Villamizar')
      .waitForElementVisible('.Select-option', 4000)
      .click('.Select-option')
      .waitForElementVisible('.nombreProfesor', 4000)
      .assert.containsText('.nombreProfesor', 'Mario Villamizar Cano')
      .end();
  }
};

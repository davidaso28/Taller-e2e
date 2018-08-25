var assert = require('assert');
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });
    it('Login correcto', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('da.saavedra@uniandes.edu.co');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234567a');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('button[id="cuenta"]', 5000);

        var boolbutton = browser.isExisting('button[id="cuenta"]');
        expect(boolbutton).toBe(true);
    });
});

describe('los estudiantes login', function()
{
  it('Navegar pagina profesor', function () {

      var roundedPIcture = browser.element('.roundedPicture');
      roundedPIcture.click();
      browser.waitForVisible('.nombreProfesor', 5000);
        var nombrebool = browser.isExisting('.nombreProfesor');
        expect(nombrebool).toBe(true);
  });
});

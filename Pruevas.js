
//prueva 1
it('Home prueva', async function () {
    await driver.sleep(5000)
    // await driver.findElement(By.id("Home")).click();

    await driver.findElement(By.id("DetalleBtn-1")).click();

    await driver.sleep(3000)


    // await driver.sleep(2000)

    await tomarCaptura(driver, "detalles ventana")


    await driver.sleep(2000);
    await driver.findElement(By.id("atras-1")).click();
    await driver.sleep(1000)
    await driver.findElement(By.id("Home")).click();
    await driver.sleep(2000);
    await driver.findElement(By.name('Filtro')).sendKeys('soledad');
    await driver.findElement(By.name('btnBuscar')).click()

    await driver.sleep(1000)

    await tomarCaptura(driver, "filtro_ventana.png")

    await driver.sleep(2000)
    await driver.findElement(By.name('btnBuscar')).click();
    await driver.sleep(2000)

    await driver.findElement(By.id('dropdownMenuButton')).click();
    await driver.sleep(2000)
    await driver.findElement(By.id('category-terror')).click(); // Cambia 'NombreCategoria'

    await driver.sleep(2000)
    await driver.findElement(By.name('btnCategory')).click();

    // 4. Esperar que la URL cambie
    await driver.wait(until.urlContains('/Filtro-Tipo'), 5000);

    await driver.sleep(2000)



});




it('navegaccion prueva', async function () {


    await driver.wait(until.elementIsVisible(driver.findElement(By.id('Libros-L'))), 5000);
    await driver.findElement(By.id("Libros-L")).click();
    // await driver.sleep(2000);
    // await driver.findElement(By.id("Libros-L")).click();
    await driver.sleep(2000);
    await tomarCaptura(driver, "Libros.png")
    await driver.sleep(1000);
    await driver.findElement(By.id("catecoria-L")).click();
    await driver.sleep(2000);
    await tomarCaptura(driver, "categorias.png")
    await driver.sleep(1000);
    await driver.findElement(By.id("autores-L")).click();
    await driver.sleep(1000);
    await tomarCaptura(driver, "autores.png")
    await driver.sleep(1000);
    await driver.findElement(By.id("editoriales-L")).click();
    await driver.sleep(1000);
    await tomarCaptura(driver, "editorial.png")
    await driver.sleep(1000);
    await driver.findElement(By.id("Home")).click();
    await driver.sleep(1000);
    await tomarCaptura(driver, "Home.png")
    await driver.sleep(3000);

})

//  it(' prueva',async function (){})

it('Prueva Formulario crear libros', async function () {

    const RutaImagen = path.resolve(__dirname, 'C:\\Users\\ELIAN\\Pictures\\Saved Pictures\\wallhaven-4963zx.jpg');



    await driver.sleep(2000)
    await driver.findElement(By.id("Libros-L")).click();

    await driver.sleep(2000);
    await driver.findElement(By.id("Libros-C")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name('Titulo')).sendKeys('soledad');
    await driver.findElement(By.name('anoPublic')).sendKeys(2002);
    await driver.sleep(1000);
    await driver.findElement(By.name('Imagen')).sendKeys(RutaImagen);
    await driver.sleep(2000);

    let Categoris = await driver.findElement(By.name('Categoris'));
    let selec = new Select(Categoris);
    await selec.selectByVisibleText('etica');

    await driver.sleep(1000);

    await driver.findElement(By.name('authores')).sendKeys('authores');
    let authores = await driver.findElement(By.name('authores'));
    let selectA = new Select(authores);
    await selectA.selectByVisibleText('rafa');

    await driver.sleep(1000);

    let editorial = await driver.findElement(By.name('editorial'));
    let select = new Select(editorial);
    await select.selectByVisibleText('editora');

    await driver.sleep(1000);

    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_crear.png")

    await driver.findElement(By.name("Crear-editar")).click();

    await driver.sleep(5000);
})


it('Campos obligatorios Formulario crear libros', async function () {

    await driver.sleep(4000)
    await driver.findElement(By.id("Libros-L")).click();

    await driver.sleep(2000);
    await driver.findElement(By.id("Libros-C")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name("Crear-editar")).click();

    await driver.sleep(1000)


    await tomarCaptura(driver, "Campos_requeridos.png");
    await driver.sleep(1000)

    await driver.findElement(By.name('anoPublic')).click();

    await driver.sleep(1000);
    await driver.findElement(By.name("Atras-btn")).click();
})

it("formulario editar Libros", async function () {

    await driver.sleep(3000);
    await driver.findElement(By.id("Libros-L")).click();

    await driver.sleep(4000);
    await driver.findElement(By.id("Libros-e-4")).click();
    await driver.sleep(1000);

    // await driver.findElement(By.name('Titulo')).sendKeys('soledad');
    await driver.findElement(By.name('Titulo')).clear()
    await driver.sleep(100)
    await driver.findElement(By.name('Titulo')).sendKeys('soledad-editada');

    await driver.findElement(By.name('anoPublic')).clear()
    await driver.sleep(100)
    await driver.findElement(By.name('anoPublic')).sendKeys(2002);

    await driver.sleep(1000);


    let Categoris = await driver.findElement(By.name('Categoris'));
    let selec = new Select(Categoris);
    await selec.selectByVisibleText('etica');

    await driver.sleep(1000);

    await driver.findElement(By.name('authores')).sendKeys('authores');
    let authores = await driver.findElement(By.name('authores'));
    let selectA = new Select(authores);
    await selectA.selectByVisibleText('rafa');

    await driver.sleep(1000);

    let editorial = await driver.findElement(By.name('editorial'));
    let select = new Select(editorial);
    await select.selectByVisibleText('editora');



    await driver.sleep(2000)

    await tomarCaptura(driver, "formulario_Editar.png")

    await driver.findElement(By.name("Crear-editar")).click();

})

it('prueva Eliminar', async function () {

    await driver.findElement(By.id("Libros-L")).click();
    await driver.sleep(3000)
    let element = await driver.findElement(By.id("Libros-D-4"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(1000);
    await element.click();

    await driver.sleep(2000)

    // await tomarCaptura(driver, "eliminar_linros.png")


    await driver.switchTo().alert().dismiss();


    await driver.sleep(1000);
    await driver.switchTo().alert().dismiss();
    await tomarCaptura(driver, "eliminar_linros.png")

})

it('Formulario crear categorias', async function () {

    await driver.sleep(3000)
    await driver.findElement(By.id("catecoria-L")).click();

    await driver.sleep(2000);


    await driver.sleep(2000);
    await driver.findElement(By.id("catecoria-C")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name('Nombre')).sendKeys('ejemplo');
    await driver.findElement(By.name('descriccion')).sendKeys('Descripcion de ejemplo');


    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_crear.png")

    await driver.findElement(By.id("Crear-editar")).click();
    await driver.sleep(1000)

    await tomarCaptura(driver, "verificaccion_crear.png")

    await driver.sleep(5000);
})

it('prueva campos requeridos formulario categorias', async function () {

    await driver.sleep(2000)
    await driver.findElement(By.id("catecoria-L")).click();

    await driver.sleep(2000);


    await driver.sleep(2000);
    await driver.findElement(By.id("catecoria-C")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name('Nombre')).sendKeys();
    await driver.findElement(By.name('descriccion')).sendKeys('Descripcion de ejemplo');


    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_crear.png")

    await driver.findElement(By.id("Crear-editar")).click();
    await driver.sleep(1000)

    await tomarCaptura(driver, "verificaccion_campos_requeridos_crear.png")

    await driver.sleep(5000);
})
it('Formulario editar categorias', async function () {

    await driver.sleep(2000)
    await driver.findElement(By.id("catecoria-L")).click();




    await driver.sleep(2000);
    await driver.findElement(By.id("catecoria-e-5")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name('Nombre')).sendKeys('editada');
    await driver.findElement(By.name('descriccion')).sendKeys('Descripcion editada');


    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_editar.png")

    await driver.findElement(By.id("Crear-editar")).click();
    await driver.sleep(1000)

    await tomarCaptura(driver, "verificaccion_editar.png")

    await driver.sleep(5000);
});
it('prueva categoria Eliminar', async function () {


    await driver.sleep(1000);
    await driver.findElement(By.id("Home")).click();
    await driver.sleep(5000);

    // Asegúrate de que el elemento es visible y desplazable
    const categoriaElement = await driver.findElement(By.id("catecoria-L"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", categoriaElement);
    await driver.wait(until.elementIsVisible(categoriaElement), 5000);
    await driver.wait(until.elementIsEnabled(categoriaElement), 5000);
    await categoriaElement.click();

    await driver.sleep(5000);

    // Desplázate al siguiente elemento y haz clic
    const deleteElement = await driver.findElement(By.id("catecoria-D-1"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", deleteElement);
    await driver.wait(until.elementIsVisible(deleteElement), 5000);
    await driver.wait(until.elementIsEnabled(deleteElement), 5000);
    await deleteElement.click();

    await driver.sleep(2000);

    // Maneja alertas de confirmación si están presentes
    try {
        await driver.wait(until.alertIsPresent(), 5000); // Espera la primera alerta
        await driver.switchTo().alert().dismiss();

        await driver.sleep(1000);

        await driver.wait(until.alertIsPresent(), 5000); // Espera la segunda alerta
        await driver.switchTo().alert().dismiss();
    } catch (e) {
        console.log("No se encontró una alerta.");
    }

    // Tomar captura después de manejar las alertas
    await tomarCaptura(driver, "eliminar_catecoria.png");


})
it('Formulario crear Autor', async function () {

    await driver.sleep(2000)
    await driver.findElement(By.id("autores-L")).click();

    await driver.sleep(2000);


    await driver.sleep(2000);
    await driver.findElement(By.id("Autor-C")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name('Nombre')).sendKeys('ejemplo');
    await driver.findElement(By.name('Correo')).sendKeys('pedrito@email.com');


    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_Autor_crear.png")

    await driver.findElement(By.id("Crear-editar")).click();
    await driver.sleep(1000)

    await tomarCaptura(driver, "verificaccion_Autor_crear.png")

    await driver.sleep(5000);
})

it('prueva campos requeridos formulario Autor', async function () {

    await driver.sleep(2000)
    await driver.findElement(By.id("autores-L")).click();

    await driver.sleep(2000);


    await driver.sleep(2000);
    await driver.findElement(By.id("Autor-C")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name('Nombre')).sendKeys();
    await driver.findElement(By.name('Correo')).sendKeys('ejemplo@gmail.con');


    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_crear.png")

    await driver.findElement(By.id("Crear-editar")).click();
    await driver.sleep(1000)

    await tomarCaptura(driver, "verificaccion_campos_Autor_crear.png")

    await driver.sleep(5000);
})
it('Formulario editar Autor', async function () {

    await driver.sleep(2000)
    await driver.findElement(By.id("autores-L")).click();

    await driver.sleep(2000);



    await driver.findElement(By.id("Autor-e-3")).click();
    await driver.sleep(1000);

    let nombreField = await driver.findElement(By.name('Nombre'));
    await nombreField.clear();
    await nombreField.sendKeys('editada');


    let correoField = await driver.findElement(By.name('Correo'));
    await correoField.clear();
    await correoField.sendKeys('editar@gmail.com');


    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_editar.png")

    await driver.findElement(By.id("Crear-editar")).click();
    await driver.sleep(1000)

    await tomarCaptura(driver, "verificaccion_editar.png")

    await driver.sleep(5000);
});
it('prueva categoria Eliminar', async function () {

    await driver.findElement(By.id("autores-L")).click();
    await driver.sleep(2000)
    let element = await driver.findElement(By.id("Autor-D-3"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(1000);
    await element.click();

    await driver.sleep(2000)

    // await tomarCaptura(driver, "eliminar_linros.png")


    await driver.switchTo().alert().dismiss();


    await driver.sleep(1000);
    await driver.switchTo().alert().dismiss();
    await tomarCaptura(driver, "eliminar_catecoria.png")

})
it('Formulario crear editoriales', async function () {

    await driver.sleep(2000)
    await driver.findElement(By.id("editoriales-L")).click();




    await driver.sleep(2000);
    await driver.findElement(By.id("editoriales-C")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name('Nombre')).sendKeys('ejemplo');
    await driver.findElement(By.name('Telefono')).sendKeys('8091110000');
    await driver.findElement(By.name('pais')).sendKeys('Colombia');

    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_editoriales_crear.png")

    await driver.findElement(By.id("Crear-editar")).click();
    await driver.sleep(1000)

    await tomarCaptura(driver, "verificaccion_editoriales_crear.png")

    await driver.sleep(5000);
})

it('prueva campos requeridos formulario editoriales', async function () {

    await driver.sleep(2000)
    await driver.findElement(By.id("editoriales-L")).click();

    await driver.sleep(2000);


    await driver.sleep(2000);
    await driver.findElement(By.id("editoriales-C")).click();
    await driver.sleep(1000);

    await driver.findElement(By.name('Nombre')).sendKeys('');
    await driver.findElement(By.name('Telefono')).sendKeys('');
    await driver.findElement(By.name('pais')).sendKeys('Colombia');


    await driver.sleep(1000)

    await tomarCaptura(driver, "formulario_crear.png")

    await driver.findElement(By.id("Crear-editar")).click();
    await driver.sleep(1000)

    await tomarCaptura(driver, "verificaccion_campos_editoriales_crear.png")

    await driver.sleep(5000);
})


it('Formulario editar editoriales', async function () {

    // await driver.sleep(2000);

    // Verifica y haz clic en "editoriales-L"
    await driver.wait(until.elementLocated(By.id("editoriales-L")), 10000);
    const editorialesL = await driver.findElement(By.id("editoriales-L"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", editorialesL);
    await editorialesL.click();

    await driver.sleep(2000);

    // Verifica y haz clic en "editoriales-e-4"
    await driver.wait(until.elementLocated(By.id("editoriales-e-1")), 10000);
    const editorialesE4 = await driver.findElement(By.id("editoriales-e-1"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", editorialesE4);
    await editorialesE4.click();

    await driver.sleep(1000);

    // Interacción con el formulario
    let nombreField = await driver.findElement(By.name('Nombre'));
    await nombreField.clear();
    await nombreField.sendKeys('editada');

    let Numero = await driver.findElement(By.name('Telefono'));
    await Numero.clear();
    await Numero.sendKeys(2299785555);

    let Pais = await driver.findElement(By.name('pais'));
    await Pais.clear();
    await Pais.sendKeys('australia');

    await driver.sleep(1000);
    await tomarCaptura(driver, "formulario_editar.png");

    // Haz clic en "Crear-editar"
    await driver.wait(until.elementLocated(By.id("Crear-editar")), 10000);
    const crearEditarButton = await driver.findElement(By.id("Crear-editar"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", crearEditarButton);
    await crearEditarButton.click();

    await driver.sleep(1000);
    await tomarCaptura(driver, "verificaccion_editar.png");

    await driver.sleep(3000);
});
it('prueva categoria Eliminar', async function () {

    await driver.findElement(By.id("editoriales-L")).click();
    await driver.sleep(1000)
    let element = await driver.findElement(By.id("editoriales-D-11"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(1000);
    await element.click();

    await driver.sleep(1000)

    // await tomarCaptura(driver, "eliminar_linros.png")


    await driver.switchTo().alert().dismiss();


    await driver.sleep(1000);
    await driver.switchTo().alert().dismiss();
    await tomarCaptura(driver, "eliminar_catecoria.png")

})
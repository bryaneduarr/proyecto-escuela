#### Pasos para iniciar localmente el proyecto-escuela

#### Prerequisitos

**Sistemas operativos compatibles**: macOS, Windows 10, Windows 11, (incluido WSL) y Linux son compatibles.

#### Descargas

**Node.js**: Asegúrate de tener instalada la versión **18.17 o posterior** de Node.js, recomiendo utilizar la ultima version que podras encontrar aqui https://nodejs.org/en/download, favor descarga la version estable (LTS).

**Git**: Asegurate de tener instalada la ultima version de `Git`, podras encontrar el ejecutable de instalcion para Windows en este link: https://git-scm.com/downloads

**Visual Studio Code**: Descarga la ultima version del editor de codigo `Visual Studio Code`, tambien puedes utilizar el editor de tu preferencia, pero te recomiendo este.

#### Ejecucion del proyecto

Una vez teniendo `Git`, `Visual Studio Code` y `Nodejs` instalados en tu sistema operativo sigue los siguientes pasos:

- Abre Visual Studio Code.

- Abre la terminal integrada puedes hacerlo yendo a la barra superior y buscando la seleccion que diga `Terminal` cuando la encuentres puedes hacer clic y abres una `nueva terminal`.

- En la terminal coloca el siuiente comando: `git clone https://github.com/bryaneduarr/proyecto-escuela.git`.

- El comando anterior servira para clonar el repositorio e descargar los archivos de codigo en tu computadora. Espera a que termine el proceso para continuar.

- Una vez lista la clonacion del repositorio puedes ejecutar el comando: `npm install`.

- El comando anterior instalara todas las librerias que se ocuparon para desarrollar el proyecto. Espera a que el proceso de instalacion termine

- Por ultimo puedes ejecutar el proyecto usando: `npm run dev`, esto abrira un servidor local de `nextjs` en la direccion `localhost:3000`, aqui podras ver el proyecto funcionando desde tu computadora local.

**Small Update for deployment here.**


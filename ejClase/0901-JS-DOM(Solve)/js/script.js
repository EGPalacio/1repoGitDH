window.addEventListener('load', () => {

    alert('Bienvenidos al sitio!');
    let firstCheck = confirm('Estás seguro de avanzar?');
    if (firstCheck == false) {
        let stopApp = document.querySelector('h2');
        stopApp.style.textAlign = 'center';
        stopApp.innerHTML = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio :(...'
    } else {

        let continueApp = document.querySelector('h2');
        continueApp.style.textAlign = 'center';
        continueApp.innerHTML = 'Que alegría que quieras continuar tu visita por este maravilloso sitio :)...'

        // Carga de datos
        let name = prompt('Ingresa tu nombre');
        let welcome = document.querySelector('h1');
        welcome.innerHTML = `Bienvenido ${name} a nuestro sitio!`;

        let age = prompt('Ingresa tu edad');
        if (Number(age) < 18) {
            // oculto el contenido general
            let contGen = document.querySelector('div');
            contGen.style.display = 'none';
            // muestro contenido de acceso denegado
            let contBlock = document.querySelectorAll('div')[4];
            contBlock.style.display = 'block';
        } else {

            // obtener listado de hobbies
            let hobbiesString = prompt('Contanos de todos tus hobbies:');
            let hobbies = hobbiesString.split(',');

            // celebrar si le gusta programar
            let program = 0;
            hobbies.forEach(element => {
                if (element.indexOf('program') > -1) { program = 1 };
            });

            if (program == 1) {
                alert('Que bueno que te guste la programación!!');
                let backImg = document.querySelector('.background-img');
                backImg.style.backgroundImage = 'url(../img/programmer.jpeg)';
            } else {
                alert('Que lastima que no te guste programar');
                let backImg = document.querySelector('.background-img');
                backImg.style.backgroundImage = 'url(../img/gatito.jpeg)';
            };

            // armar lista de hobies para html
            console.log(hobbies);

            function createList(items, parent) {
                var ul = document.createElement('ol');
                parent.appendChild(ul);
                items.forEach(function generateList(item) {
                    var li = document.createElement('li');
                    ul.appendChild(li);
                    if (Array.isArray(item)) {
                        createList(item, li);
                    } else {
                        li.innerHTML = item;
                    }
                });
            }

            let articleHobbies = document.querySelector('article');
            console.log(articleHobbies);

            createList(hobbies, articleHobbies);

            //color preferido para el nombre de usuario
            let colorPref = prompt('decime cual es tu color preferido?');
            console.log(colorPref);

            welcome.innerHTML = `Bienvenido <span class="name"> ${name} </span> a nuestro sitio!`;
            document.querySelector('.name').style.color = `${colorPref}`;

        }
    }

});
window.addEventListener('load', () => {

    // Option sections
    let apiOptions = document.querySelector('.apiOptions');
    apiOptions.style.backgroundColor = 'blue';

    // Api results
    let apiResult = document.querySelector('.apiResult');
    apiResult.innerHTML = 'Selecciona un boton para probar nuestra API';

    // Api List of Movies
    let apiList = document.getElementById('apiList');
    apiList.addEventListener('click', ()=>{
        apiResult.style.backgroundColor = 'lightgrey';
        apiResult.style.color = 'blue';

        let getList = async function(){
            try{
                apiResult.innerHTML = '';
                let listReq = await axios('/api/movies/list');
                let list = listReq.data;
                list.forEach(element => {
                    apiResult.innerHTML += `<p> ${element.id} - ${element.title} </p>`;
                })
            } catch (err) {console.log(err)}
        };
        getList();
    });

    // Api Detail of Movies
    let apiDetail = document.getElementById('apiDetail');
    apiDetail.addEventListener('click', ()=>{
        swal("Ingresa el id de la película:", {
            content: "input",
          })
          .then((id) => {

            // let id = prompt('Ingresa el id de la película')
            apiResult.style.backgroundColor = 'lightgrey';
            apiResult.style.color = 'blue';

            let getDetail = async function(){
                try{
                    apiResult.innerHTML = '';
                    let detailReq = await axios(`/api/movies/detail/${id}`);
                    let detail = detailReq.data;

                    swal(`Seleccionaste la película: ${detail.title}`)

                    for (const item in detail) {
                        apiResult.innerHTML += `<p> ${item}: ${detail[item]} </p>`;
                    };

                } catch (err) {console.log(err)}
            };
            getDetail();

        });
    });

});


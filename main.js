//My api key
var apikey = {
    key: 'f5eb67d9-c445-4048-9ef2-941b72fe5151'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        var texto = "";

        // Get 10 coins and symbols 
        for (let i = 0; i < 12; i++) {

            //Show API information
            texto = texto + `
                  <div class="cap">
                  <h5 class="mt-2">${api.data[i].name}</h5>
                    <div class="media">
                        <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="120" height="90">
                        <div class="media-body">
                        <p>${api.data[i].symbol}</p>
                        <p> <strong>First Historical</strong>:<br>${api.data[i].first_historical_data}</p>
                        <p> <strong>Rank: </strong>${api.data[i].rank}</p>
                        </div>
                    </div>
                  </div>  
                    `;
            document.getElementById("coins").innerHTML = texto;

        }
    })
    .catch((error) => {
        console.error(error.message);
    });


/*
Algoritmo para a API de CEP, estilizado com bootstrap
*/


var CEP = document.getElementById('CEP')

function consultarCEP() {
    axios.get('https://viacep.com.br/ws/' + CEP + '/json/')
        .then(response => {
            const bairro = response.data.bairro || "Não informado";
            const rua = response.data.logradouro || "Não informado";
            const cidade = response.data.localidade || "Não informado";
            const complemento = response.data.complemento || "Não informado";
            const estado = response.data.uf || "Não informado";

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p><strong>CEP:</strong> ${CEP}</p>
                <p><strong>Estado:</strong> ${estado}</p>
                <p><strong>Cidade:</strong> ${cidade}</p>
                <p><strong>Bairro:</strong> ${bairro}</p>
                <p><strong>Rua:</strong> ${rua}</p>
                <p><strong>Complemento:</strong> ${complemento}</p>
            `;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Erro ao consultar o CEP. Verifique se o CEP está correto.
                </div>
            `;            
            console.error("Erro ao buscar o CEP:", error);
        });
}


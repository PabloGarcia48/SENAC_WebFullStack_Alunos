
/*
Algoritmo para buscar a API de pessoas

'https://dummyjson.com/users'
*/
async function fetchData() {
    const tableBody = document.getElementById('people-table')
    tableBody.innerHTML = '<tr><td colspan="4" class="text-center">Carregando dados...</td></tr>'
    
    try {
        const response = await axios.get('https://dummyjson.com/users')
        const users = response.data.users;
        tableBody.innerHTML = '';
        users.forEach(user => {
            const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.firstName} ${user.lastName}</td>
                <td>${user.email}</td>
                <td><img src="${user.image}" alt="Avatar" class="img-thumbnail" style="max-width: 50px;"</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Erro ao carregar os dados</td></tr>'
        console.error(error);
    }

}

document.getElementById('reload').addEventListener('click', fetchData)

fetchData();

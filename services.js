const { get } = require('axios')

const URL = `https://swapi.dev/api/people`

const getPersonas = async (nome) => {
    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url)

    return result.data.results.map(mapearPessoa)
}

function mapearPessoa(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}

module.exports = {
    getPersonas
}

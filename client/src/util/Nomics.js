// import fetch from "node-fetch"

export const NomicsAPI = {
    ticker(crypto) {
        return fetch(`/${crypto}`)
        .then(response => {return response.json()})
        .catch(err => console.log(err))
    },

    sparkline(crypto) {
        return fetch(`/${crypto}/historical`)
        .then(response => {return response.json()})
        .catch(err => console.log(err))
    }
}

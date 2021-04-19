import axios from 'axios';

const url = 'https://covid19-brazil-api.now.sh/api/report/v1'

export const fetchData = async (estado) => {

  let changeableURL = url;

  if(estado){
    changeableURL = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estado}`
  }

  try {
    const fetched = await axios.get(changeableURL);
    return fetched.data
    
  } catch (error) {
    console.log(error)
  }
}

export const fetchEstados = async () => {

  try {
    const response  = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
    let estados = []
    for(let estado in response.data.data){
      estados.push(response.data.data[estado].uf)
    }
    return estados.sort()
  } catch (error) {
    console.log(error)
  }
}

export const fetchUfFullNames = async() => {
  try {
    const response  = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
    let ufNameDict = {}
    for(let estado in response.data.data){
      let uf_ = response.data.data[estado].uf
      let nomeEstado = response.data.data[estado].state
      ufNameDict[uf_] = nomeEstado

    }

    return ufNameDict
  } catch (error) {
    
  }
}
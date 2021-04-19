import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchEstados, fetchUfFullNames } from '../../api';


const CountryPicker = ( {handleEstadoChange} ) => {
  const [fetchedEstados, setFetchedEstados] = useState([])
  const [estadosNameList, setEstadosNameList] = useState({})

  useEffect(() => {
    const fetchEstadosAPI = async () => {
      setFetchedEstados(await fetchEstados())
    }
    fetchEstadosAPI();
  }, [setFetchedEstados])

  useEffect(() => {
    const fetchNomesAPI = async () => {
      setEstadosNameList(await fetchUfFullNames())
    }
    fetchNomesAPI();
  }, [setEstadosNameList])


  return(
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=>handleEstadoChange(e.target.value)}>
        {fetchedEstados.map((estado,i)=><option key={i} value={estado}>{estadosNameList[estado]}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;
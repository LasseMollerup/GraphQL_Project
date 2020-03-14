import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Caracters = () => {


    const [dataFromAPI, setDataFromAPI] = useState([])

    const [dataFound, setDataFound] = useState(false)

    useEffect(() =>{

        GetDataFromAPI()
    },[dataFound])

    const GetDataFromAPI = async () => {

        try {
            const findData = await axios.get('https://swapi.co/api/people/')
            console.log('findData =>', findData)
            setDataFromAPI(findData.data.results)
            setDataFound(true)
            
        }catch(error){
            console.log('error in catch', error)
        }
    console.log('dataFromAPI after Try', dataFromAPI)
    
    }

    return dataFromAPI.map(({name, height}, idx) =>(
           <div key={idx}>
                <p>{`${name}, ${height}`}</p>
            </div>
    ))

}
    export default Caracters


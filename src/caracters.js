import React, { useEffect, useState } from 'react'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'

import axios from 'axios'

const Caracters = () => {


    const [dataFromAPI, setDataFromAPI] = useState({
        name: '',
        heigth: '',
        hair_color: '',
    })

    const [dataFound, setDataFound] = useState(false)

    useEffect(() =>{

        GetDataFromAPI()
    }, [dataFound])

    const GetDataFromAPI = async () => {
        // let caracterID = idx

        try {
            const findData = await axios.get('https://swapi.co/api/people/5/')
            
            setDataFromAPI({
                name: findData.data.name,
                heigth: findData.data.heigth,
                hair_color: findData.data.hair_color,
            })
            setDataFound(true)
            
        }catch(error){
            console.log('error in catch', error)
        }
    console.log('dataFromAPI after Try', dataFromAPI)
    
}
    return (
        <div>
            <h3>Hello there</h3>
        </div>
    )


}
    export default Caracters

  // Content-Type: application/json
    // <Query query={gql`
           
    //         { 
    //             url
    //             gender
    //             hair_color
    //             height
    //             homeworld    
    //             mass
    //             name
    //         }
        
    // `}
    // >
    //     {({loading, error, data}) => {
    //         if(loading) return <p>Loading ...</p>

    //         if(error) return <p>Error :(</p>
    //         console.log('error => ', error)

    //         return data.map(({url, gender, hair_color, height, homeworld, mass, name,}) => (
    //             <div key={url}>
    //                 <p>{`${name} and ${gender}`}</p>
    //             </div>

    //         ));
    //     }}
    // </Query>
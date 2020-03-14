import React, { useState, useEffect } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GraphQL = () => {

    const [dataFromAPI, setDataFromAPI] = useState({});
    const [dataReceived, setDataReceived] = useState(false)

    useEffect(() =>{
        tryQuery()
    }, [dataReceived])

    const tryQuery = () => (

        
        <Query query={gql`
            allPeople½ { 
                totalCount
            }`
        }>
       {({loading, error, data}) => {
           debugger
           console.log('data', data)

           if(loading) return <p>Loading ...</p>
           
           if(error) return <p>Error :(</p>
            console.log('error => ', error)
            if(data){
                console.log('data2', data)
                setDataFromAPI({...data})
                setDataReceived(true)
            }
            console.log('dataFromAPI', dataFromAPI)
            return data.map(({url, gender, hair_color, height, homeworld, mass, name,}) => (
                <div key={url}>
                    <p>{`${name} and ${gender}`}</p>
                </div>

));
}}
    </Query>
)
    return(
        <div>
            <h3>hello</h3>
        </div>
    )

}


export default GraphQL
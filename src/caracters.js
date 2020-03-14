import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
const Caracters = () => (

    
    // Content-Type: application/json
    <Query query={gql`
           
            { 
                url
                gender
                hair_color
                height
                homeworld    
                mass
                name
            }
        
    `}
    >
        {({loading, error, data}) => {
            if(loading) return <p>Loading ...</p>

            if(error) return <p>Error :(</p>
            console.log('error => ', error)

            return data.map(({url, gender, hair_color, height, homeworld, mass, name,}) => (
                <div key={url}>
                    <p>{`${name} and ${gender}`}</p>
                </div>

            ));
        }}
    </Query>



)
export default Caracters
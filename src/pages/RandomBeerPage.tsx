import axios from 'axios'
import { useEffect, useState } from 'react'
export const RandomBeerPage = () => {
const [beer, setBeer] = useState<Beer>()



  interface Beer {
    image_url: string
    _id: string
    name: string
    tagline: string
    first_brewed: string
    description: string
    attenuation_level: number
    contributed_by: string
    expireAt: string
    __v: number
  }

  useEffect(() => {
    const fetchRandomize = async () => {
      try {
        const response = await axios.get<Beer>(
          `https://f5-beers-065cad3017be.herokuapp.com/beers/random`,
        )
        setBeer(response.data)
      } catch (error) {
        console.error('Error fetching beer details:', error)
      }
    };
    
    fetchRandomize();
  }, []);

  return (
    <div>
      {beer && (
        <>
          <img src={beer.image_url} width={100} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Contributed By: {beer.contributed_by}</p>
        </>
      )}
      {!beer && <p>Cargando Cervezas...</p>}
    </div>
  )
}

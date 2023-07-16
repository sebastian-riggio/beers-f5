
import {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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

export const BeersDetailPage = () => {
  const { beerId } = useParams<{ beerId: string }>();
  const [beer, setBeer] = useState<Beer>();

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          `https://f5-beers-065cad3017be.herokuapp.com/beers/${beerId as string}`,
        )
        setBeer(response.data as Beer )  
        console.log(beer)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBeers().catch(console.error)
  }, [beerId])
  
  return (
    <>
    {
      beer && 
      <div>
      <img src={beer.image_url} width={100} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed By: {beer.contributed_by}</p>
      </div>
    }
    
    </>
  )

}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

interface Beer {
  image_url: string
  _id: string
  name: string
  tagline: string
  first_brewed: string
  description: string
  attenuation_level: number
  brewers_tips: string
  contributed_by: string
  expireAt: string
  __v: number
}

export const AllBeersPage = () => {
  const [beers, setBeers] = useState<Beer[]>([])

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          'https://f5-beers-065cad3017be.herokuapp.com/beers',
        )

        console.log(response)
        setBeers(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBeers().catch(console.error)
  }, [])

  return (
    <>
      <h1> All beers</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} />
          </Link>

          <h3>
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
          </h3>
          <p>{beer.tagline}</p>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      ))}
    </>
  )
}

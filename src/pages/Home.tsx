import React from 'react'
import useFetch from '../hooks/useFetch'

const Home: React.FC = () => {
  const { data, loading } = useFetch()
  return (
    <section>
      <h2>Home</h2>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </section>
  )
}

export default Home

import { useEffect, useState } from "react"

export const App = () => {

  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const [refreshToken, setRefreshToken] = useState(0)

  useEffect(() => {
    setIsLoading(true);

    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then(response => response.json())
      .then(data => {
        setNumber(data);
        setIsLoading(false);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))

  }, [refreshToken])

  return (

    <>
      {
        isLoading ? <p>Loading...</p> : <p>Random number: {number}</p>
      }

      <div>{error}</div>

      <div>...</div>
      <button disabled={isLoading} onClick={() => setRefreshToken(refreshToken + 1)}>New number</button>
    </>
  )
}
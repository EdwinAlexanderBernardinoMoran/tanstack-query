import { useQuery } from "@tanstack/react-query";

const getCryptoNumber = async (): Promise<number> => {
  throw 'Failed to fetch number';

  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new').then(response => response.json())
  return Number(resp);
}

export const App = () => {

  const { data: number, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ['crypto-number'],
    queryFn: getCryptoNumber,
    retry: false,
  })

  return (

    <>
      {
        isFetching ? <p>Loading...</p> : <p>Random number: {number}</p>
      }

      <div>{JSON.stringify(error)}</div>

      <div>...</div>
      <button disabled={isFetching} onClick={() => refetch()}>New number</button>
    </>
  )
}
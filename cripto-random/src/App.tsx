import { useRandom } from "./hooks/useRandom"

export const App = () => {

  const { randomQuery } = useRandom();

  return (
    <>
      {
        randomQuery.isFetching ? (
          <p>Loading...</p>
        ) : (
          <p>Random Number: {randomQuery.data}</p>
        )
      }

      <div>{JSON.stringify(randomQuery.error)}</div>

      <div>...</div>
      <button
        disabled={randomQuery.isFetching}
        onClick={() => randomQuery.refetch()}
      >
        New number
      </button>
    </>
  )
}
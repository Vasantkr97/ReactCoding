import useFetch from "./hooks/useFetch"



function App() {
  const { data, loading } = useFetch('https://randomuser.me/api/?results=5')


  return (
    <>
    <div>
      { 
        loading ? (
          <div>
            Loading...
          </div>
        ) : (
          data
        )
      }
    </div>
      
    </>
  )
}

export default App

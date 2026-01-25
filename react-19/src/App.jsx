import './App.css'

function App() {

  return (
    <>
     <NetflixSeries /> 
    </>
  )
}

export default App


const NetflixSeries = () => {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" width="100%" height="100%" />

      <div>
        <h1>Hello, Nitesh</h1>
        <h2>Name: Queen of Tears</h2>
        <h3>Rating: 5</h3>
        <p>summary of the movie</p>
      </div>  
    </div>
  )
}
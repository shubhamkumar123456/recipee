import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
  const [value, setvalue] = useState([]);
  const [search, setsearch] = useState("burger");
  console.log(search)

  let searchRef = useRef()

  async function fetchRecipe() {

    let res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=2c3fc261&app_key=f38f48a32c61bb341e3079d9d94d455a`)

    let data = await res.json()
    // console.log(data.hits)
    setvalue(data.hits)
  }

  useEffect(() => {
    fetchRecipe()
  }, [search])

  console.log(value)

  const handleSearch = (e) => {
    e.preventDefault();
    let searchValue = searchRef.current.value
    setsearch(searchValue)
    console.log(searchValue)
  }
  return (
    <div>
      <form className="d-flex w-50 p-3 m-auto mt-3 mb-3" role="search">
        <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search Recipe here..." aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="row row-cols-3 gap-2 d-flex justify-content-center">
        {value.map((ele) => {
          return <div className="card" style={{ width: '18rem' }}>
            <img src={ele.recipe.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ele.recipe.label}</h5>
              <Link to="/recipe" state={ele} className="btn btn-primary">View Recipe</Link>
            </div>
          </div>

        })}
      </div>
    </div>
  )
}

export default Home

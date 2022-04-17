import Header from "../components/Header"
import Nav from "../components/Nav"
import Resulte from "../components/Resulte"
import requestst from "../utils/requestst"

 function Home({resulte}) {

  return (
    <div >
      <Header/>
      <Nav/>
      <Resulte resulte={resulte}/>
    </div>
  )
}
export default Home
export async function getServerSideProps(contex){
  const genre = contex.query.genre
 
  const requset =await fetch(`https://api.themoviedb.org/3${requestst[genre]?.url ||requestst.fetchTreanding.url }`).then((res) => res.json())

  return{
    props : {
      resulte : requset.results
    }
    }}

import './App.css'
import Header from './components/tele.jsx'
import Registration from './components/Registration.jsx'
import Footer from './components/Footer.jsx'

function App() {
   const y=[2025,2027,2028,2029]
   const c={name:"kiet",location:"Ghaziabad",estdyear:1998};
  return (
    <>
      <Header title="My first React App" />
      <Header title="Lets Explore FSD" />

      <main>
       
        <Registration />
      </main>

     <Footer
  year={y[3]}
  company="Xebia Organisation"
  college={c}
/>

      
    </>
  )
}

export default App

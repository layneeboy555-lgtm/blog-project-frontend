import { home } from '../data/home'
import { useParams } from 'react-router-dom'
import '../styles/DisplayDetails.css'

export default function DisplayDetails(){
    const { id } = useParams()
    const figure = home.find((e)=> e.id == id)
    console.log(figure)
    return(
        <>
         <div className="container">
                <div className="displaydetails">
                    <img className='figure' src={figure.image}/>
                    <h1 className='figure2'>{figure.name}</h1>
                    <p className='figure3'>{figure.subtitle}</p>
                    <p className='figure4'>{figure.time}</p>
                    <p>{figure.date}</p>
                    

                </div>
          </div>
        </>
    )
}
import { home } from '../data/home'
import { useParams } from 'react-router-dom'
import '../styles/DisplayDetails.css'

export default function DisplayDetails(){
    const { id } = useParams()
    const figure = home.find((e)=> e.id == id)
    console.log(figure)
    return(
        <>
         <div className="display-container">
                <div className="displaydetails">
                    <img className='figure' src={figure.image}/>
                    <h1 className='figure2'>{figure.name}</h1>
                    <p className='figure3'><span>SUBTITLE:</span>{figure.subtitle}</p>
                    <p className='figure4'><span>TIME:</span>{figure.time}</p>
                    <p className='figure5'><span>DATE:</span>{figure.date}</p>
                    <p className='figure6'><span>CATEGORY:</span>{figure.category}</p>
                    <p className='figure7'><span>CONTENT:</span>{figure.content}</p>

                </div>
          </div>
        </>
    )
}
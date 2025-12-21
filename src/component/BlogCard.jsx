function BlogCard({ handleclick, data}){
    return (
        <div className="home">
            {data.map((event)=>(
                <div  key={event.id} onClick={()=> handleclick(event)} className="home-container2">
                    <img className="home2" src={event.image}></img>
                    <h1 className="title">{event.name}</h1>
                    <p className="subtitle">{event.subtitle}</p>
                    <p className="date">{event.date}</p>
                    {event.time && <p className="time">{event.time}</p>}
                </div>
            ))}
        </div>
    )
}

export default BlogCard
function BlogCard({event}){
    return (
    <div  key={event.image} onClick={()=> handleclick(e)} className="home-container2">
        <img className="home2" src={event.image}></img>
        <h1 className="title">{event.name}</h1>
        <p className="subtitle">{event.subtitle}</p>
        <p className="date">{event.date}</p>
        {event.time && <p className="time">{event.time}</p>}
    </div>
    )
}

export default BlogCard
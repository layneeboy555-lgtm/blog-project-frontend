import '../styles/Foot.css'

function Foot(){

    return(
        <>
        <footer className='footer-cont'>
            <div className='foot'>
                <div className='foot-details'>
                   <h1>Have an idea?</h1>
                   <h1>Tell us about it</h1>
                   <a href="/">Contact Us</a>
               </div>

               <div className='foot-details'>
                   <label for="email">Email:</label>
                   <input className="foot-email"  type="email" placeholder='Enter your Email to Subscribe to our daily blogs'></input>
                   <button className='foot-button'>Subscribe</button>
               </div>

            
                <div className='copyright'>
                <span>&copy; Alright reserved, Blogs 2025 Edition</span>
                </div>
               
           </div>
        </footer>
        </>
    )
}
export default Foot
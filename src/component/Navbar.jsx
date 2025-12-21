import '../styles/Navbar.css'

function Navbar(){
     

    return(
        <>
          <header className='header'>
      <a className="blog-title"  href="/">Blogs</a>

      <nav className='nav-links'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/categories">Categories</a>
      </nav>
     </header>
        </>
    )
}
export default Navbar
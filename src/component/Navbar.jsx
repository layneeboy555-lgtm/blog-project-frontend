import '../styles/Navbar.css'

function Navbar(){
     

    return(
        <>
          <header className='header'>
      <a className="blog-title"  href="/">Blogs</a>

      <nav className='nav-links'>
        <a className='home-nav' href="/">Home</a>
        <a className='about-nav' href="/about">About</a>
        <a className='cat-nav' href="/categories">Categories</a>
      </nav>
     </header>
        </>
    )
}
export default Navbar
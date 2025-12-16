import '../styles/Navbar.css'

function Navbar(){
     

    return(
        <>
          <header className='header'>
      <h1>Blogs</h1>

      <nav className='nav-links'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/categories">Categories</a>
        <a className="admin-post"  href="/post">Post</a>
      </nav>
     </header>
        </>
    )
}
export default Navbar
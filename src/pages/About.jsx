import React from "react";
import "../styles/About.css"

export default function About(){
    return(
        <>
        <div>
        <div className="about-container">
            <h1 className="middle">About Us</h1> 
            <p>Welcome to Our Blog Website- a space created to inform, inspire, 
             and empower readers through meaningful and practical content.</p> 

            <p>
            this blog is founded with one simple goal: to share knowledge that
            makes life easier, smarter, and more informed.
            </p>

            <h1 className="middle2">Our Mission</h1>

            <p>
             Our mission is to provide valuable content that helps readers grow intellectually,
             profesionally, and personally.
            </p>

            <h2>What you will find here</h2>
            <ul>
            <li>
              Informative and practical blog
            </li>
             <li>Clear explanations of complex topics
             </li>
             <li>helpful guides, tips, and insights</li>
            </ul>
             <h2> Join the Community</h2>
             <p>We're more than just a blog-we're a growing community of curios minds. <br></br>
             Thank you  for being here </p> 
        </div>
        </div>
       </>
    )
}
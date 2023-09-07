import React from 'react';
import '../Componentcss/Content.css';
import ContactForm from './ContactForm';
import BlogContent from './BlogContent';

function Content({ page }) {
  return (
    <div className='Content-container'>
     
        {page === "WorkScreen" ? (
           <div className='content-img-container'>
          <img className='img' src='./giris.png' alt='' />
          </div>
        ) : page === "HomeScreen" ? (
          <div>
            hey
          </div>
        ) : page === "BlogScreen" ? 
        (
       <BlogContent/>

        ): page === "ContactScreen"?
         (
           
              <ContactForm/>
           
         ) : null  }
      
    </div>
  );
}

export default Content;

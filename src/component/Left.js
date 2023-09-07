import React from 'react';

export default function Left() {
  return (
    <div className='Left-container'>
       <div className='left-1'>
           <div className='left-img'>
           <a><img  src="./kursaderen.jpg" alt=''/></a> 
           </div>
           
       </div>
       <style jsx>{`
       
       .Left-container{
        display:flex;
        flex-direction:column;
        width:100%;
        border:10px solid #000000;
        height:100%;
        justify-content:space-around;
        align-items:center;
        
       }
       .left-1{
        
        background:#000000;
        margin-top:20px;
        display:flex;
        width:299px;
        height:299px;
        border: 1px solid #ddd;
        justify-content:center;
        align-items:center;
       }
       .left-img img{
        display:flex;
        width:285px;
        height:285px;
       }
       .left-img{
        display:flex;
        background:white;
        justify-content:center;
        align-items:center;
        width:285px;
        height:285px;
        border : 1px solid #000000;
       }
       .left-info{
        width:300px;
        height:300px;
        text-align:center;
        padding:25px;
        color:#000000;
       }
       .github-link {
        text-decoration: underline;
        color:#7777;
        
       }
       .github-link:hover{
        color:#000000;
       }
       `}
       
       </style>

       <div className='left-info'>
              <ul>
                <li>
                 
                 <a> Github: <a className='github-link' href='https://github.com/KursadEren'> KÜRŞAD EREN MADEN</a></a><br/><br/>
                 <a> Linkedin: <a className='github-link' href=' https://www.linkedin.com/in/kursad-maden-385715259/' >KÜRŞAD EREN MADEN</a></a><br/><br/>
                 <a> iletişim: +905539777143 </a>  <br/><br/>
                 <a> Email: k.erenmaden1@outlook.com </a>
                
                </li>
              </ul>

           </div>
    </div>
  )
}
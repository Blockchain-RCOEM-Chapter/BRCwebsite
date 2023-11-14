import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import Tech from './images/Tech team.png';
import social from './images/social team.png';
import marketing from './images/marketing.png';
import event from './images/event team.png';
import videoediting from './images/videoediting.png';
import content from './images/content.png';
import graphics from './images/graphic team.png';

import web3 from './images/web3.jpg'
import BC from './images/BC.gif' ;
import dece from './images/dece.gif' ;
import "./body.css";



function Type() {
  const sentence = "BLOCKKCHAIN RCOEM CHAPTER";
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const id = setInterval(() => {
      setText((prev) => {
        if (index === sentence.length) {
          clearInterval(id);
        }
        return sentence.slice(0, ++index);
      });
    }, 100); 

    return () => clearInterval(id);
  }, [sentence]);

  return (<>
    <h1 style={{ margin: '10px', marginLeft: '150px', }}>
      {text}
    </h1>
    
    <div>

    <h3 style={{fontFamily:'Lucida Calligraphy', margin: '10px', marginLeft: '85px' }}>Shri Ramdeobaba College Of Engineering and Management</h3>
<hr style={{ background: 'mediumblue', borderColor: 'mediumblue', width: '80%', height: '5px', marginLeft: '100px', borderRadius:'3px' }} />
    </div>
    </>
  );
}


function Community(){
  return(
    <>
    <a href="###">
    <div className='hover_btn1' >
      <div   >
      <h3 style={{ color:'white', marginBottom:'10px'}} >Join Our Community ⏩</h3>
      </div>
       </div>
       </a>
    </>
  );
}

function Information() {
  return(
         <>
            <div className="container">
    <div className="info-block">
      <h1 className='topic1'>What is BlockChain ???                           🤔</h1>
      <p className='p1'><strong>Blockchain defined: Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.</strong></p>


    </div>

   
    <div className="two-blocks">
      <div className="horizontal-block">
        <div className="first">
        <div className='lig11' style={{display:'block', backgroundColor:'rgb(235, 159, 159)', }}><h1 style={{paddingLeft:'2px'}}>What is BRC ?</h1></div>
        <p className='p2'>To join a college club, attend club fairs or contact club leaders, attend meetings, fill out forms, pay dues, and participate in activities.</p>
          </div>

          <div className="second">
          <div className='lig12' style={{display:'block', backgroundColor:'rgb(136, 192, 122)', }}><h1 style={{paddingLeft:'2px'}}>What is BRC ?</h1></div>
        <p className='p2'>To join a college club, attend club fairs or contact club leaders, attend meetings, fill out forms, pay dues, and participate in activities.</p>
              </div>
      </div>

      <div className="horizontal-block">
        <div className="first">
        <div className='lig21' style={{display:'block', backgroundColor:'rgb(139, 216, 240)', }}><h1 style={{paddingLeft:'2px'}}>What is BRC ?</h1></div>
        <p className='p2'>To join a college club, attend club fairs or contact club leaders, attend meetings, fill out forms, pay dues, and participate in activities.</p>
              </div>
    
              <div className="second">
              <div className='lig22' style={{display:'block', backgroundColor:'rgb(240, 239, 170)', }}><h1 style={{paddingLeft:'2px'}}>What is BRC ?</h1></div>
        <p className='p2'>To join a college club, attend club fairs or contact club leaders, attend meetings, fill out forms, pay dues, and participate in activities.</p>
              
                  </div>
      </div>
    </div>
  </div>        
         </>
  );
}


function Events(){
  return(
    <>
      
       <div className='test'>
        <div className='r1'>
       
        <div className='dom_bar'>
                <h1>GLIMPSE OF OUR ICEBREAKING SESSIONS</h1>
             </div>

        </div>
        
        <div className='event_header' >


              <h1 style={{textAlign:'center', fontFamily:'Readex Pro',fontSize:'49px',textDecoration:'underline'}}>Upcoming Events</h1 >
      
                   <div className='up_event'>
                      <div className='even'>
                        <img src={web3} width='284px' height='265px' style={{marginLeft:'30px', marginTop:'20px' ,borderRadius:'20px'}}/>
                      <div className='event_info'>
                         <h2 style={{fontFamily:'Readex Pro',marginTop:'10px',color:'white' , textAlign:'center'} }>BlockChain</h2>
                         <h2 style={{fontFamily:'Readex Pro',marginTop:'10px',color:'white' ,textAlign:'center'} }>10 July 2023</h2>
                         </div>
                      <div className='event_button'> 
                         <div className='register'><h3 style={{fontFamily:'Readex Pro', marginLeft:'20px',marginTop:'10px',color:'white'} }>Register</h3></div>
                         <div className='detail'><h3 style={{fontFamily:'Readex Pro', marginLeft:'20px',marginTop:'10px',color:'white'} }>View details</h3></div>
                      </div>
                      </div>

                     


                      <div className='even'>
                        <img src={web3} width='284px' height='265px' style={{marginLeft:'30px', marginTop:'20px' ,borderRadius:'20px'}}/>
                      <div className='event_info'>
                         <h2 style={{fontFamily:'Readex Pro',marginTop:'10px',color:'white' , textAlign:'center'} }>BlockChain</h2>
                         <h2 style={{fontFamily:'Readex Pro',marginTop:'10px',color:'white' ,textAlign:'center'} }>10 July 2023</h2>
                         </div>
                      <div className='event_button'> 
                         <div className='register'><h3 style={{fontFamily:'Readex Pro', marginLeft:'20px',marginTop:'10px',color:'white'} }>Register</h3></div>
                         <div className='detail'><h3 style={{fontFamily:'Readex Pro', marginLeft:'20px',marginTop:'10px',color:'white'} }>View details</h3></div>
                      </div>
                      </div>



                      <div className='even'>
                        <img src={web3} width='284px' height='265px' style={{marginLeft:'30px', marginTop:'20px' ,borderRadius:'20px'}}/>
                      <div className='event_info'>
                         <h2 style={{fontFamily:'Readex Pro',marginTop:'10px',color:'white' , textAlign:'center'} }>BlockChain</h2>
                         <h2 style={{fontFamily:'Readex Pro',marginTop:'10px',color:'white' ,textAlign:'center'} }>10 July 2023</h2>
                         </div>
                      <div className='event_button'> 
                         <div className='register'><h3 style={{fontFamily:'Readex Pro', marginLeft:'20px',marginTop:'10px',color:'white'} }>Register</h3></div>
                         <div className='detail'><h3 style={{fontFamily:'Readex Pro', marginLeft:'20px',marginTop:'10px',color:'white'} }>View details</h3></div>
                      </div>
                      </div>

                   </div> 
                          


                   <div className='btn2 more_btn'>
      <div style={{paddingTop:'10px'}}><strong>More Events</strong></div>
    </div>       
        </div>






       
       <div className='r2'>
           <div className='blk1'>
           <img src={BC} alt="BlockChain" />  
           </div> 


            <div className='blk2'>      
              <h1>
                 <span style={{ color: 'red' }}>BlockChain</span>
                 <span style={{ color: 'blue' }}>Technology</span>
              </h1>
     <p style={{fontFamily:'Lato', fontSize:'20px', paddingLeft:'15px'}}>
     Blockchain is one of the major tech stories of the past decade. Everyone seems to be talking about it—but beneath the surface chatter there’s not always a clear understanding of what blockchain is or how it works. Despite its reputation for impenetrability, the basic idea behind blockchain is pretty simple. And it has major potential to change industries from the bottom up.
     </p>
              
     <div className='btn2'>
      <div style={{paddingTop:'10px'}}><strong>Learn More</strong></div>
    </div>             
            </div>            
       </div>

    



       <div className='r2'>
           <div className='blk1'>
           <img src={dece} alt="BlockChain" />  
           </div> 


            <div className='blk2'>      
              <h1>
                 <span style={{ color: 'red' }}>Decentralized </span>
                 <span style={{ color: 'blue' }}>Finance</span>
              </h1>
     <p style={{fontFamily:'Lato', fontSize:'20px', paddingLeft:'15px'}}>
     Decentralized Finance (DeFi) refers to a financial ecosystem built on blockchain technology, enabling the creation and execution of financial services without traditional intermediaries like banks. DeFi platforms utilize smart contracts to offer services such as lending, borrowing, and trading, fostering a more open, transparent, and inclusive financial system. Its key attributes include accessibility to operate without geographical restrictions.
     </p>
              
     <div className='btn2'>
      <div style={{paddingTop:'10px'}}><strong>Learn More</strong></div>
    </div>             
            </div>            
       </div>
       </div>
    </>
  );
}


function FAQs(){
return(
      <>
      <div className='faqs_container' >
        <div>
          <h1 style={{ textAlign:'center', fontFamily:'Edwardian Script ITC', fontSize:'50px', textDecoration:'Underline' }}>Frequently Asked Questions !</h1>
        </div>
        <div className='sub-faq ' >
            <div className='colm1'>
              <h2 style={{color:'red', textAlign:'center', marginTop:'55px'}}>How Can Join BRC ?</h2>
              <p style={{fontFamily:'Lato', fontSize:'20px', paddingLeft:'15px'}}>The clubs is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.

</p>
            </div>
            <div className='colm1 c2'>
            <h2 style={{color:'blue', textAlign:'center', marginTop:'35px'}}>How frequently do events and workshops occur?</h2>
              <p style={{fontFamily:'Lato', fontSize:'20px', paddingLeft:'15px'}}>We have a hands-on cohort on BlockChain . We also hold workshops and showcases & we would recommend you to join our community to get updates.</p>

            </div>
            <div className='colm1 c3'>
            <h2 style={{color:'orangered' , textAlign:'center', marginTop:'45px'}}>What should I carry when attending a workshop?</h2>
              <p style={{fontFamily:'Lato', fontSize:'20px', paddingLeft:'15px'}}>We recommend you carry with you a notebook, pen and a laptop because more often than not we make our hands dirty with code.</p>
            </div>
            <div className='colm1 c4'>
            <h2 style={{color:'rgb(156, 247, 11)', textAlign:'center', marginTop:'55px'}}>Who should I reach out to if I have any questions?</h2>
              <p style={{fontFamily:'Lato', fontSize:'20px', paddingLeft:'15px'}}>If you have any questions or comments, please don't hesitate to contact us by clicking the button below.</p>

              </div>         
        </div>

        <div className='btn2 btn22 cl'>
      <div style={{paddingTop:'10px'}}><strong>Contact US !</strong></div>
    </div> 
      </div>
      
      
      
      </>
);
}


function Domains(){
   return(
    <>
        <div className='cards'>
             <div className='dom_bar'>
                <h1>Our Domains</h1>
             </div>
             <div className='dom_row1'>
                 <div className='dom1'>
                  <img src={Tech} alt='Domain 1' width='270px' />
                  <p>Technical Team</p>
                 </div>

                 <div className='dom1'>
                  <img src={graphics} alt='Domain 1'width='270px' />
                  <p>Graphics Team</p>
                 </div>

                 <div className='dom1'>
                  <img src={social} alt='Domain 1' width='273px'/>
                  <p>Social Media Team</p>
                 </div>

                 <div className='dom1'>
                  <img src={event} alt='Domain 1' width='270px' />
                  <p>Events Team</p>
                 </div>
             </div>


             <div className='dom_row1 dom_row2'>  

             <div className='dom1 dom21'>
                  <img src={content} alt='Domain 1' width='270px' />
                  <p>Content Team</p>
                 </div>

                 <div className='dom1'>
                  <img src={marketing} alt='Domain 1'width='270px' />
                  <p>Marketing Team</p>
                 </div>

                 <div className='dom1'>
                  <img src={videoediting} alt='Domain 1' width='273px'/>
                  <p>VideoEditing Team</p>
                 </div>



             </div>



             <div className='hover_btn1 team_button' >
      <div >
      <h3 style={{ color:'white' , fontFamily:'Readex Pro', fontSize:'26px' }} >MEET OUR TEAM</h3>
      </div>
       </div>
            
        </div>
    </>
   );
}










function Body() {
  return (
    <>
  <div >
    <div className="top">

      <div className='center-image'>
        <img src={logo} alt="Centered Image" width="205px" height="189px" />
      </div>

      <div className='type-container'>
        <Type />
      </div>
      <Community />
    </div>

    <div>
      <Information />
      <Domains />
      <Events />
      <FAQs />
    </div>
  </div>
</>

  );
}


export default Body;      
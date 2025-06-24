import React from 'react'

function Hero() {
    return ( 
        <>

        <div className='container p-5 '>
            <div className='row text-center'>

            <img src='\media\images\homeHero.png'  className='mb-4 mt-3'  style={{width:'70%',margin:'auto'}}  />

            <h1 className='mt-4' style={{fontSize:"46px"}}>Invest in everything</h1>
            <p  className="mt-3"style={{fontSize:"20px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

            <button className='btn btn-primary fs-5 p-2 mt-4 mb-5   ' style={{width:'18%',margin:"auto"}}>Sign up For Free</button>

            </div>
        </div>
        
        
        
        
        </>
     );
}

export default Hero;
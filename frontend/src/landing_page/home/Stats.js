import React from 'react'

function Stats() {
    return (
        <div className='container '>
          <div className='row p-5 mx-1'>
            <div className='col-5 p-5 ' >
              <h1 className='mb-5 fs-2'>Trust with confidence</h1>

              <h2 className=' fs-4'>Customer-first always</h2>
              <p className='text-muted p-2'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
              <h2 className=' fs-4'>No spam or gimmicks</h2>
              <p  className='text-muted p-2'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='' style={{textDecoration:"none"}}> Our philosophies.</a></p>
              <h2 className=' fs-4'>The Zerodha universe</h2>
              <p className=' text-muted p-2'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              <h2 className=' fs-4'>Do better with money</h2>
              <p className=' text-muted p-2'>With initiatives like <a href='' style={{textDecoration:"none"}}> Nudge</a> and <a href='' style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>


            </div>
            <div className='col-7 pl-5 mt-5'>
              <img src='\media\images\ecosystem.png' alt='ecosystem'style={{width:"90%"}}/>
              <div className='text-center'>
              <a href='' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> &nbsp; &nbsp;
              <a href='' style={{textDecoration:"none"}}>Try Kite demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Stats;
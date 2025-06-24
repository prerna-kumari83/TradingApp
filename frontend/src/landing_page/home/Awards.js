import React from 'react'


function Awards() {
    return ( 

        <div className='conatiner mb-2 '>
            <div className='row p-5 ml-5 mr-5 '>
                <div className='col-6 p-5 ml-5 '>
                    <img src='\media\images\largestBroker.svg' alt='brokerImg' style={{marginLeft:"10%"}}/>
                    
                </div>
                <div className='col-6 mt-5 p-5'>

                    <h1>Largest Stock Broker in India</h1>
                    <p >2+ million Zerodha clients contribute to over 15% of all
                        retail order volumes in India daily by trading and investing in:
                    </p>

                    <div className='row mt-5'>
                        <div className='col-6 ml-5 mr-5 '>
                            <ul>
                                <li>
                                    <p>
                                        Futures and Options
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Commodity derivatives
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Currency derivatives
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>
                                        Stockes & IOPs
                                        
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Direct mutuals funds

                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Bonds and Goverments

                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                <img src='\media\images\pressLogos.png' alt='pressLogo'  style={{width:"90%"}}/>
                </div>

            </div>
        </div>
     );
}

export default Awards;
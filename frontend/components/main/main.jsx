
import React from 'react';

class MainPage extends React.Component{
  
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div className="splash" >
                    <img src="https://dimcooking-dev.s3-us-west-1.amazonaws.com/15.%E6%99%B6%E7%91%A9%E9%AE%AE%E8%9D%A6%E9%A4%832880x1920_Gz5GCtr.jpg" width="100px" height="50px"/>
                    <div>
                        <span className="splash-name">
                            <br/>
                            <br />
                            <br/>
                            <div className="splash-title">Shrimp Dumplings(蝦餃)</div>
                            <br />
                            <div>A simple Dim Sum classic</div>
                            <br />
                            <div className='splash-text'>Daniel Yee</div>
                        </span>
                        <span className="dot">
                            <div className='dot-text'>RECIPE</div>
                            <div className='dot-text'>OF THE DAY</div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
 
};

export default MainPage;

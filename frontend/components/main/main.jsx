
import React from 'react';

class MainPage extends React.Component{
  
    constructor(props) {
        super(props);
    }

    render () {
        // const background = {
        //     width: '100px',
        //     height: '100px',
        
        //     backgroundImage: "url('https://dimcooking-dev.s3-us-west-1.amazonaws.com/15.%E6%99%B6%E7%91%A9%E9%AE%AE%E8%9D%A6%E9%A4%832880x1920_Gz5GCtr.jpg')"
        // };style={background}
        return (
            <div>
                <div className="splash" >
                    <img src="https://dimcooking-dev.s3-us-west-1.amazonaws.com/15.%E6%99%B6%E7%91%A9%E9%AE%AE%E8%9D%A6%E9%A4%832880x1920_Gz5GCtr.jpg" width="100px" height="50px"/>
                </div>
            </div>
        )
    }
 
};

export default MainPage;

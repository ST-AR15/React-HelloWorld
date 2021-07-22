import React from 'react';
 
class Page2 extends React.Component{
	render(){
        let mystyle={
            width: '100%',
            height:'80px',
            backgroundColor:'greenyellow',
            fontSize:'24px',
            textAlign: 'center',//垂直居中
            lineHeight: '80px'//水平居中
        };
		return(
			<div>
			<h1 style={mystyle}>This is Page 222222!</h1>
			</div>
		);
	}
}
 
export default Page2;
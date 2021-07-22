import React from 'react';

class Page1 extends React.Component {

    render() {
        let mystyle = {
            width: '100%',
            height: '80px',
            backgroundColor: 'pink',
            fontSize: '24px',
            textAlign: 'center',//垂直居中
            lineHeight: '80px'//水平居中
        };
        console.log(this, this.props);
        return (
    	<div>
			<h1 style={mystyle}>This is Page 111111!</h1>
         </div>
		); 
	}
}
 
export default Page1;
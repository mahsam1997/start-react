import { Component } from 'react';
import Header2 from '../HEADER/header2-component';

const x= <div>شروع react.js</div>
class Header3 extends Component{
    render(){
    return (
       <>
       <div className = "header" style={{ color:'blue', border:'2' , fontSize:'30px' ,textAlign:'center'}}>
       به نام خدا
       {x}

       <div className = "header2" style={{ color:'blue', border:'2' , fontSize:'30px' ,textAlign:'center',background:'black'}}>چند المنت</div>

       <Header2/>
       </div>
       </>
    )
    }
}
export default Header3;
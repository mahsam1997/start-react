import Header2 from '../HEADER/header2-component'

const x= <div>شروع react.js</div>
const Header=(props)=>{
    return (
       <>
       <div className = "header" style={{ color:'blue', border:'2' , fontSize:'30px' ,textAlign:'center'}}>
       به نام خدا
       {x}
       <div className = "header2" style={{ color:'blue', border:'2' , fontSize:'30px' ,textAlign:'center',background:'black'}}>چند المنت</div>
       <h3> {props.title}</h3>
       <p>{props.description}</p>
       {props.children}

       <Header2/>
       </div>
       </>
    )
}
 export default Header;
const Peoplecomponent =()=>{
 const people=["sara","ali","mahsa"];

 const peoplewithdata=[
     {id:'12', name:'sara'},
     {id:'23', name:'ali'},
     {id:'76', name:'mahsa'}
 ];
  return (
      <div>
          <ul>
              {
               people.map((personname,index)=><li key={index}>{personname}</li>)   
              }
          </ul>

          <ul>
              {
               peoplewithdata.map((person)=><li key={person.id}>{person.name}</li>)   
              }
          </ul>
      </div>
  )
}
 export default Peoplecomponent;
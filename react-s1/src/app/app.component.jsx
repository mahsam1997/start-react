import Header3 from '../footer/footer.component';
import Header from '../HEADER/header-component';
import Title12 from '../HEADER/title12.component';

const App=()=>{
     return(
         <>
    <Header/>
    <Header3/>
    <Header  description="صفحه توضیحات">
    <>
        <Title12/>
     </>
     </Header >
    <Header title="homepage"/>
    <Header title="contactpage"/>
    </>
    )
}
export  default App;
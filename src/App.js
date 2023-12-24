import './logo.svg';
import './App.css';
import { Component } from 'react';
import girl from './component/image/girl.png';
import { isEmailValid } from './component/HW';
import { handleButtonClick } from './component/HW';
import { handleInputChange } from './component/HW';
import './hww.css';
import  EmailForm  from './component/HW';




function App() {
  return (
    <div className="App">
    <div className='container'>
      <div className='container-item item1 ' >
      <div>
       <div className='circle'></div>
       <div  className='header' >

       <div className= 'item7'>BASE</div> 
       <div className= 'item8'>APPAREL</div> 
       </div>

       </div>

      </div>
        <div className='container-item item2 ' >
          <img src={girl}  className='image' ></img>

        </div>
        <div className='container-item item3 ' >
        <section className="email">
              <div className="coming-soon">
              <span className= 'weare'>WE'RE</span>
              <h2>COMING</h2>
              <h2>SOON</h2>
              </div>
            <div className= 'item10'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
              

               

              <EmailForm />
             
              
             
              
           
               
             
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

// ./anotherFile.js






//export {
  //HelloworldFromp,
  //HelloworldFromSpan,
  //HelloworldFromDiv,

//}

//export default HelloworldFromP

//import {HelloworldFromP} from 'HW'

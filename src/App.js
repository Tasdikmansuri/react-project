import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import girl from './component/image/girl.png';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='container-item item1 ' >
          <div className='header-container' >
            <div className='circle hc-item1 '></div>
            <div className='hc-item2'>BASE</div> 
            <div className='hc-item3'>APPAREL</div> 
            <div className='hc-item4' ></div>
          </div>

        </div>
        <div className='container-item item2 ' >
        <img src={girl}  className='image' ></img>

        </div>
        <div className='container-item item3 ' >
        <section className="email">
            <div>
              <h1>WE'RE</h1>
            </div>
            <div>
            <h2>COMING</h2>
            </div>
            <div>
              <h2>SOON</h2>
            </div>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
              <form>
                <input className='input-email' type="email" placeholder="Email address" />
                <button className='button' ></button>
              </form>
          </section>
        </div>
      </div>
    </div>
  );
}
export default App;

//export {
  //HelloworldFromp,
  //HelloworldFromSpan,
  //HelloworldFromDiv,

//}

//export default HelloworldFromP

//import {HelloworldFromP} from 'HW'

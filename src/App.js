import React, {useRef, useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

const App=()=> {
  
  const dlt = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const website = useRef(null);
  const imagelink = useRef(null);
  const gender = useRef(null);
  const skills = useRef[null];
  const Java = useRef(null);
  const HTML = useRef(null);
  const CSS = useRef(null);
  const Python = useRef(null);

 
  function clear(event){
    event.preventDefault()
    
    var users=JSON.parse(localStorage.getItem('users') || "[]")
    var tempusers=users
    var index=dlt.current.value
    console.log("index",index);

    if (index < 0) return;
    tempusers.splice(index,1)
    users=tempusers
    localStorage.setItem('users',JSON.stringify(users))
  }
  function enroll(){

    var users=JSON.parse(localStorage.getItem('users') || "[]")
    const Java=document.getElementById('JAVA').checked?document.getElementById('JAVA').value:''
    const HTML=document.getElementById('HTML').checked?document.getElementById('HTML').value:''
    const CSS=document.getElementById('CSS').checked?document.getElementById('CSS').value:''
    const Python=document.getElementById('PYTHON').checked?document.getElementById('PYTHON').value:''
    const skills=[Java,HTML,CSS,Python]
    var user={
      name:name.current.value,
      email:email.current.value,
      website:website.current.value,
      imagelink:imagelink.current.value,

      gender: document.querySelector('input[name="Gender"]:checked').value,
      skills:skills
   }
   users.push(user)
   localStorage.setItem('users',JSON.stringify(users))
   
  
  }

  return(
    <div className="App">

      <div className="row">

        <div className="col-sm-12">
        
          <h1 class="text-info text-center"> SAMPLE </h1>
          
          <h2> STUDENT ENROLMENT FORM </h2>

          <input ref={dlt} type="text" placeholder='Details of Index no. be delete' size="30"  />

          <div className="col-sm-6" > 
            <div class="row">
              <form onSubmit={enroll}>

                  <label> Name      :   </label>
                  <input ref={name} type="text" placeholder='Name'  />
                  <br/>
                  <br/>
                  <label> Email      :   </label>
                  <input ref={email} type="text" placeholder='Email'  />
                  <br/>
                  <br/>
                  <label> WebSite  :   </label>
                  <input ref={website} type="text" placeholder='Web Site'  />
                  <br/>
                  <br/>
                  <label> Image Link  :   </label>
                  <input ref={imagelink} type="text" placeholder='Image Link'  />
                  <br/>
                  <br/>
                  <label> Gender   :   </label>
                  <input type="radio" name="Gender"  value="male"/> Male
                  <input type="radio" name="Gender" value ="female"/> Female
                  <br/>
                  <br/>
                  <lebal> Skills   :    </lebal>
                  <input type="checkbox" id="JAVA" value="java"/> Java
                  <input type="checkbox" id="HTML" value="HTML"/> HTML
                  <input type="checkbox" id="CSS" value="CSS"/> CSS
                  <input type="checkbox" id="PYTHON" value="python"/> Python
                  <br/>
                  <br/>   
                  <button className='enrolbtn' onSubmit={enroll}> Enroll Student </button>
                  <button className='clearbtn' onClick={clear}> Clear</button><br/>

              </form>
            </div>
            
          </div>

        </div>

      </div>

    </div>
    
  );

};
export default App;

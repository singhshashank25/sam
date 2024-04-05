import React from 'react';
import { Button } from 'react-bootstrap';
function signup_form(){
   return(
   <div className="form">
      <form className='signup-form'>
      <fieldset>
      <legend className='signup-legend'>Personal Details  </legend>
      <label className='signup-label'>First Name</label>
      <input type='text' className='input-text'  required></input>
      <label className='signup-label'>Middle Name</label>
      <input type='text' className='input-text'></input>
      <label className='signup-label'>Last Name</label>
      <input type='text' className='input-text' required></input>
      <label className='signup-label'>Birth Date</label>
      <input type='date' className='input-text' required></input>
      </fieldset>
      
      <fieldset>
      <legend className='signup-legend'>College Details </legend>
      <label className='signup-label'>Batch</label>
      <input type='number' className='input-text' required></input>
      <label className='signup-label'>Programme</label>
      <input type='text' className='input-text' required></input>
      <label className='signup-label'>Branch</label>
      <input type='text' className='input-text' required></input>
      <label className='signup-label'>Roll Number</label>
      <input type='number' className='input-text' required></input>
      </fieldset>
      
      <fieldset>
      <legend className='signup-legend'>Contact Details </legend>
      <label className='signup-label'>Phone Number</label>
      <input type='tel' className='input-text' required></input>
      <label className='signup-label'>Whatsapp Number</label>
      <input type='tel' className='input-text' required></input>
      <label className='signup-label'>Email</label>
      <input type='email' className='input-text' required></input>
      <label className='signup-label'>LinkedIn</label>
      <input type='url' className='input-text' required></input>
      </fieldset>
      <fieldset>
      <legend className='signup-legend'>Important Links</legend>
      <label className='signup-label'>Github</label>
      <input type='url' className='input-text' required></input>
      <label className='signup-label'>GeeksForGeeks</label>
      <input type='url' className='input-text' required></input>
      <label className='signup-label'>Leetcode</label>
      <input type='url' className='input-text' required></input>
      <label className='signup-label'>Competitive Coding Profile</label>
      <input type='url' className='input-text' required></input>
      </fieldset>
      
      
      <Button variant="dark">Submit</Button>
      
      </form>
     </div>
   );
}

export default signup_form
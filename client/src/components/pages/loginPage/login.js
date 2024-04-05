import React from 'react'
import { Button } from 'react-bootstrap'

function login() {
  return (
    <div className="login-container d-grid gap-2">
    <Button className="login-btn" variant="danger" size="lg">
      Google
    </Button>
     <div>
        Note: Authorised only for IIITG Students and alumni
     </div>
  </div>
  )
}


export default login;
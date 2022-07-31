import React from 'react'
import {Link} from 'react-router-dom'
function AccountCreated() {
  return (
    <div style={{textAlign: 'center', backgroundColor: 'coral', color: 'white'}}>
        <h1>Account Created with success.</h1>
        <h4>connectez-vous: Cliquer  <Link to="/login">ici</Link></h4>
    </div>
  )
}

export default AccountCreated;
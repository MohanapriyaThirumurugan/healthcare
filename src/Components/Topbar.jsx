import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Navigate,useNavigate} from 'react-router-dom'

function Topbar() {
    let navigate=useNavigate()
  return (
    <Nav className="justify-content-end  bg-body-tertiary  sticky-top"  >
        <Nav.Item>
          <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>navigate('/about')}>Aboutus</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>navigate('/health')}>Healthtips</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  onClick={()=>navigate('/resources')}>Resource</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link onClick={()=>navigate('/contact')}>Contactus</Nav.Link>
          </Nav.Item>
      </Nav>
    
  )
}

export default Topbar
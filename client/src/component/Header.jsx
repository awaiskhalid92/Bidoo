import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,MDBInput,MDBInputGroup
} from 'mdb-react-ui-kit';

export default function Header(props) {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>

    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>{props.title}</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
          >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink  href='/'>{props.pagename1}</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>{props.pagename2}</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>{props.pagename3}</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>{props.pagename4}</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <div className="position-absolute top-50 start-50 translate-middle">
          <MDBInputGroup className='w-100 p-3' noBorder textBefore={<MDBIcon fas icon='search' />}>
          <input className='form-control' type='text' placeholder='Search' />
          </MDBInputGroup>

          </div>
         
          {/* Cart Button  */}
          <div className='me-2' color='light'> 
          <MDBNavbarNav>
          <MDBNavbarLink href='#'>
          <MDBIcon fas icon="shopping-cart" />  
          </MDBNavbarLink>
          </MDBNavbarNav>
          </div>
         
          {/* Login/Signup Button  */}
          <MDBBtn  className='mx-1' color='light'> Login </MDBBtn>
          <MDBBtn  className='mx-1' color='dark'> Signup </MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
    {/* Header Picture  */}
    {/* <div
        className='p-5 text-ri bg-image'
        style={{ backgroundImage: "url('https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-1-mid-se-craft-obsidian-ashen-slate-french-blue-sail-dr8868-400-8.jpg')", height: '600px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>{props.producttitle}</h1>
              <h4 className='mb-3'>{props.productdescription}</h4>
              <MDBBtn tag="a" outline size="lg" color='light'>
                Buy Now!
              </MDBBtn>
            </div>
          </div>
        </div>
      </div> */}
</header>
  );
}

// props values 
Header.defaultProps={
  title:'Set title here',
  pagename1: 'Set page name',
  pagename2: 'Set page name',
  pagename3: 'Set page name',
  pagename4: 'Set page name',
};

import React from 'react'
import logo from '../../images/PK.jpg'
import { List ,ListItem} from 'semantic-ui-react'

const Header = () => {
  return (
    <div className='w-screen h-24 bg-white flex items-center justify-between px-4'>
    <div className='flex items-center'>
      <img src={logo} alt='logo' className='w-24' />
      <span className='font-bold ml-2 text-red-600 text-2xl'>PK DIESELS & TURBO SERVICE</span>
    </div>
    <div>
    <List className='p-4 m-4'>
        <ListItem as='a' className='p-2 text-blue-400 font-bold'>About Us</ListItem>
        <ListItem as='a' className='p-2 text-blue-400 font-bold'>Sitemap</ListItem>
        <ListItem as='a' className='p-2 text-blue-400 font-bold'>Contact</ListItem>
    </List>
    </div>
  </div>
  )
}

export default Header

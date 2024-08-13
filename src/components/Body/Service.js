import React from 'react'
import boschimage from '../../images/bosch.png'
import { Card } from 'semantic-ui-react';
import delphiimage from '../../images/delphi.png'
import contenental from '../../images/contenental.png'
import denso from '../../images/denso.png';
import holset from '../../images/holsetorg.png'

const Service = () => {
  return (
    <div className='m-4'>
    <div>
        <p className='text-blue-900 font-bold text-6xl'>Services</p>
    </div>
    <div className='flex flex-wrap h-60'>
        <Card
            style={{width:"20%" ,height:'25%',padding:'1%',marginTop:'1%',
                 margin:'1%'}}
            image={boschimage}
        />
        <Card
            style={{width:"20%",height:'20%' ,padding:'1%',marginTop:'1%'}}
            image={delphiimage}
        />
        <Card
            style={{width:"20%",height:'20%' ,padding:'1%',marginTop:'1%'}}
            image={contenental}
        />
        <Card
        style={{width:"20%",height:'20%' ,padding:'1%',marginTop:'1%'}}
        image={denso}
    />
    <Card
    style={{width:"20%",height:'20%' ,padding:'1%',marginTop:'1%'}}
    image={holset}
/>
    </div>
    
    </div>
  )
}

export default Service

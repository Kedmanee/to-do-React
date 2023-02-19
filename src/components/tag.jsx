import React from 'react'
import '../custom-styles.scss';

function Tag({tagname}) {
  return (
    <div style={{float:'right'}}>
        <p className='tagbg'>{tagname}</p>
        
    </div>
  )
}

export default Tag
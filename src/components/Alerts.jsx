import React from 'react'

const Alerts = ({title}) => {
  return (
      <div>
          <div className='font-medium uppercase mt-4'>
            <p className="font-medium uppercase">{title}</p>
          </div>
          <hr className="my-2" />
          <div className='h-36 border-2 border-t-0 border-r-0 border-l-0 mt-5'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a dolorem unde quis rem temporibus totam provident sunt aut facere.</p>
          </div>
      </div>
  )
}

export default Alerts
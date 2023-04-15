import React from 'react'

const Alerts = ({title, items}) => {
  return (
    <div>
      <div className="font-medium uppercase mt-4">
        <p>{title}</p>
      </div>
      <hr className="my-2" />

    

      {items?.map((item, index) => (
        <div className="card-body p-0 h-36 border-2 border-t-0 border-r-0 border-l-0 mt-5 overflow-auto">
          <p className="font-medium uppercase">Sender: {item.sender_name}</p>
          <p className='font-medium uppercase'>Event: {item.event}</p>
          <p className='mb-4'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Alerts
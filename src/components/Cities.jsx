import React from 'react'

const Cities = ({data}) => {
  return (
    <div className="border-2 rounded-3xl w-80 h-32 mt-6">
      <div className="p-4 mx-2">
        <div className="flex justify-between">
          <h2 className="card-title">Country</h2>
          <p>icon</p>
        </div>
        <h2 className="card-title">City</h2>
        <div className="flex justify-between mt-4">
          <p>description</p>
          <p>temp&deg;C</p>
        </div>
      </div>
    </div>
  );
}

export default Cities
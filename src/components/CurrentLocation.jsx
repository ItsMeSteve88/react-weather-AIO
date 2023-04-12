const CurrentLocation = ({data}) => {
    return (
      <div>
        <div className="image-full w-80">
          <div className="card-body p-4 mx-2">
            <h2 className="card-title">Current Location</h2>
            <h2 className="card-title">City</h2>
            <p>
              Current Temp: Temp&deg;C
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default CurrentLocation
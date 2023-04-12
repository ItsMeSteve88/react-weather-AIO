const todayDisplay = () => {
    return (
      <div className="btn-group font-semibold text-xl">
        <button className="mr-8 text-gray-500 active:text-white hover:text-base-content">
          Today
        </button>
        <button className="mr-8 text-gray-500 active:text-white hover:text-base-content">
          Hourly
        </button>
        <button className="mr-8 text-gray-500 active:text-white hover:text-base-content">
          Next 7 Days
        </button>
      </div>
    );
  }
  
  export default todayDisplay
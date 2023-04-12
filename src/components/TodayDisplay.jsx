const todayDisplay = () => {
    return (
      <div className="btn-group font-semibold text-xl">
        <button className="mr-8 text-gray-500 active:text-white hover:text-white">
          Today
        </button>
        <button className="mr-8 text-gray-500 active:text-white hover:text-white">
          Tomorrow
        </button>
        <button className="mr-8 text-gray-500 active:text-white hover:text-white">
          Next 7 Days
        </button>
      </div>
    );
  }
  
  export default todayDisplay
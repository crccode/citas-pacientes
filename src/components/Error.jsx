const Error = ({mensaje}) => {
    return (
      <div
        className="uppercase bg-red-600 text-white w-full text-center p-2 mb-5
      rounded-md font-bold"
      >
        <p>{mensaje}</p>
      </div>
    );
  };
  
  export default Error;
  
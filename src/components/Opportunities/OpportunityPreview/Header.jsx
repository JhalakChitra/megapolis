import Button from "./Button";


const Header = () => {
  return (<>
         <div className=" pb-2"><a className="text-gray-500">Dashboard -</a> <a className="text-gray-900 font-semibold"> Opportunities </a></div>   


    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">AI Full Analysis</h1>
      <div className="flex gap-2 mt-3 sm:mt-0">
        <Button >Create Opportunity</Button>
        <Button variant="secondary">Ai Proactive Scan</Button>
      </div>
    </div> </>
  );
};

export default Header;
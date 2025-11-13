import Button from "./Button";
const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">AI Full Analysis</h1>
      <div className="flex gap-2 mt-3 sm:mt-0">
        <Button variant="secondary">Create Opportunity</Button>
        <Button>AI Full Report</Button>
      </div>
    </div>
  );
};

export default Header;

const ProgressBar = ({ progress }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
      <p className="text-gray-600 mb-2">AI Analysis in Progress</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-500 h-2.5 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{progress}% completed</p>
    </div>
  );
};

export default ProgressBar;

const KeyAnalysisSummary = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-3 text-gray-800">Competitive Advantages</h4>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          <li>Proven BRT expertise</li>
          <li>Local Phoenix presence</li>
          <li>Federal funding experience</li>
          <li>Sustainability design focus</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-3 text-gray-800">Key Risk Factors</h4>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          <li>Integration with existing transit systems</li>
          <li>Environmental compliance requirements</li>
          <li>Stakeholder coordination challenges</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyAnalysisSummary;

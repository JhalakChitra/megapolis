const AccountOverviewForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="font-semibold text-lg mb-4">Account Information</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Account ID" className="input" defaultValue="000-01" />
        <input type="text" placeholder="Client name" className="input" defaultValue="Megapolis" />
        <input type="text" placeholder="Address" className="input" defaultValue="45, Street" />
        <input type="text" placeholder="Market sector" className="input" defaultValue="Transportation" />
        <input type="text" placeholder="City" className="input" />
        <input type="text" placeholder="State" className="input" />
        <input type="text" placeholder="Zip code" className="input" />
        <input type="text" placeholder="Website" className="input" defaultValue="xyz.com" />
        <input type="text" placeholder="Approver" className="input" defaultValue="David Rodriguez – Senior Partner" />
        <input type="text" placeholder="Approval Date" className="input" defaultValue="Dec 15, 2024 – 2:30 PM PST" />
      </div>
    </div>
  );
};

export default AccountOverviewForm;

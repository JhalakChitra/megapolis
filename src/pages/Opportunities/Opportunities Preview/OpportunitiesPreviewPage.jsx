import Header from "./Header";
import ProgressBar from "./ProgressBar";
import OpportunityOverview from "./OpportunityOverview";
import KeyAnalysisSummary from "./KeyAnalysisSummary";
import AnalysisStats from "./AnalysisStats";

const OpportunitiesPreviewPage=()=>{
    return(
     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <Header />
      <ProgressBar progress={60} />
      <OpportunityOverview />
      <AnalysisStats />
      <KeyAnalysisSummary />
    </div>
    )
}

export default OpportunitiesPreviewPage;
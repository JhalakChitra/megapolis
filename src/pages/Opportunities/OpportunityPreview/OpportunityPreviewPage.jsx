import Header from "../../../components/Opportunities/OpportunityPreview/Header";
import ProgressBar from "../../../components/Opportunities/OpportunityPreview/ProgressBar";
import OpportunityOverview from "../../../components/Opportunities/OpportunityPreview/OpportunityOverview";
import AnalysisStats from "../../../components/Opportunities/OpportunityPreview/AnalysisStats";
import KeyAnalysisSummary from "../../../components/Opportunities/OpportunityPreview/KeyAnalysisSummary";

const OpportunityPreviewPage=()=>{
    return(
     <div className="min-h-screen bg-gray-50 p-4 sm:p-1">
      <Header />
      <ProgressBar progress={60} />
      <OpportunityOverview />
      <AnalysisStats />
      <KeyAnalysisSummary />
    </div>
    )
}

export default OpportunityPreviewPage;
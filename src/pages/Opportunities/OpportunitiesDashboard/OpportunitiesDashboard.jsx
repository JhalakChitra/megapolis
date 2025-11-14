import Header from "../../../components/Opportunities/OpportunitiesDashboard/Header";
import Tabs from "../../../components/Opportunities/OpportunitiesDashboard/Tabs";
import { useState } from "react";
import PipelineManagement from "../PipelineManagement/PipelineManagement";
import MyOpportunity from "../MyOpportunity/MyOpportunity";
import SourceOpportunities from "../SourceOpportunities/SourceOpportunities";


const OpportunitiesDashboard=()=>{

  const [active, setActive] = useState("Source Opportunities");


    return(
    <>
    <Header/>
      <Tabs active={active} setActive={setActive} />
       {/* Page Content */}
      <div className="mt-4">
        {active === "Source Opportunities" && <SourceOpportunities />}
        {active === "Pipeline Management" && <PipelineManagement />}
        {active === "My Opportunity" && <MyOpportunity />}
      </div>
    
    </>
    )
}

export default OpportunitiesDashboard;
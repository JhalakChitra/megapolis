import { Smartphone } from "lucide-react";
import SearchBar from "../../../components/Opportunities/SourceOpportunities/SearchBar";
import SmartFilter from "../../../components/Opportunities/SourceOpportunities/SmartFilter";
import SourceOpportunitiesTable from "../../../components/Opportunities/SourceOpportunities/SourceOpportunitiesTable";
const SourceOpportunities=()=>{
    return(<>
    <SearchBar/>
    <SmartFilter/>
    <SourceOpportunitiesTable/>
    </>)
}

export default SourceOpportunities;
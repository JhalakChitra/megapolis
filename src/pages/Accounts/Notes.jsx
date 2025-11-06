import ClientDocuments from "../../components/Accounts/Notes/ClientDocuments";
import ClientNotes from "../../components/Accounts/Notes/ClientNotes";

const Notes=()=>{
    return(
    <div className="space-y-6 bg-gray-50 p-4 sm:p-6 min-h-screen">
      <ClientNotes />
      <ClientDocuments />
    </div>
    )
}

export default Notes;
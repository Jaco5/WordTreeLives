
import axios from "axios";

export default {
  searchAPI: requestTerms => axios.get("https://doaj.org/api/v1/search/articles/"+ requestTerms +"?page=1&pageSize=30")
   //this could have param controls for pagination/size per page : size of diagram 
};
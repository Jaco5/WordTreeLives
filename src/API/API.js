
import axios from "axios";

export default {
  searchAPI: (requestTerms, page, resPerPage) => {
    return axios.get("https://doaj.org/api/v1/search/articles/" + requestTerms + "?page=" + page + "&pageSize=" + resPerPage);
  }
 } //this could have param controls for pagination
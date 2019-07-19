import axios from "axios";

// The getPosts method retrieves post from the server - Database
// It accepts a "query" or term to search the post DB
export default {
  getPosts: function(query) {
    return axios.get("/api/posts", { params: { q: query } });
  }
};

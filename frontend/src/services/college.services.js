import requests from "./httpService";

const CollegeServices = {
  getAllColleges: async () => {
    return requests.get("/colleges");
  },
  getSingleCollege: async (id) => {
    return requests.get(`/colleges/${id}`);
  },
};
export { CollegeServices };

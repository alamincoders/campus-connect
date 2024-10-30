import { useCallback, useEffect, useState } from "react";
import { CollegeServices } from "./CollegeServices";

export const useColleges = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(data);

  // Fetch all colleges
  const getColleges = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await CollegeServices.getAllColleges();
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch single college by ID
  const singleCollege = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await CollegeServices.getSingleCollege(id);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getColleges(); // Fetch all colleges on initial render
  }, [getColleges]);

  return {
    data,
    loading,
    error,
    singleCollege,
    getColleges,
  };
};

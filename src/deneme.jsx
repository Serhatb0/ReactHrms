import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getJobPostings,
  getJobPostingsByPage,
} from "../src/redux/actions/jobPostingsActions";

export default function Deneme() {
  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPageSize, settotalPageSize] = useState(0);
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
 

  const jobPostingsPage = useSelector((state) => state.jobPostingspage.jobPostingsPage);

  const jobPostings = useSelector((state) => state.job.jobPostings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobPostingsByPage(activePage, pageSize));
    
    dispatch(getJobPostings());
  }, [activePage, pageSize]);

  

  console.log(jobPostingsPage);
  return <div>

      <ul>
          {jobPostings.map(job =>(
              <li>{job.jobDescription}</li>
          ))}
      </ul>
  </div>;
}

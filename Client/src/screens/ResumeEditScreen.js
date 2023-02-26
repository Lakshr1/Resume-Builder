import React, { useEffect, useState } from "react";
import ResumeEdit from "../components/ResumeEdit";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import axios from "axios";








export default function ResumeEditScreen() {

  // const Data = useSelector((state) => state.getResumeEditReducer);
  // const { resume, loading } = Data
  const [resumeData, setresumeData] = useState({})
  const [loading, setloading] = useState(true)

  //console.log(resume, loading)

  function getResume() {
    axios.get(`/api/get-resume/6367f3f8e14450c6057de05a`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(
      (response) => {
        console.log(response.data)
        setresumeData(response.data)
        setloading(false)
      },
      (error) => {
        if (error.response.status == 401) {
        } 
      }
    );
  }

  useEffect(() => {
    getResume()
  }, [])

  return (
    <div class="body-box">
      {loading ? (<div>Loading...</div>) : (
        <div class="body-content">
          <SideBar />
          <ResumeEdit resume={resumeData} loading={loading} getResume={getResume} />
        </div>
      )}
    </div>
  );
}

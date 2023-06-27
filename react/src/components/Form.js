import React, { useState } from "react";
import Home from "./Home";
import Education from "./Education";
import Experiences from "./Experiences";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";
import Extras from "./Extras";
import axios from "axios";
import { saveAs } from "file-saver";
import Success from "./Success";
const Form = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    expOrg1: "",
    expPos1: "",
    expDesc1: "",
    expDur1: "",
    expOrg2: "",
    expPos2: "",
    expDesc2: "",
    expDur2: "",

    projTitle1: "",
    projLink1: "",
    projDesc1: "",
    projTitle2: "",
    projLink2: "",
    projDesc2: "",

    eduSchool1: "",
    eduYear1: "",
    eduQualification1: "",
    eduDesc1: "",
    eduSchool2: "",
    eduYear2: "",
    eduQualification2: "",
    eduDesc2: "",

    extra1: "",
    extra2: "",
  });

  const [page, setPage] = useState(0);
  const FormTitle = [
    "",
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Home formData={formData} setFormData={setFormData} />;
    }
    else if (page === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="text-center">{FormTitle[page]}</h1>
      </div>
      <div>{PageDisplay()}</div>
      <div className="d-flex justify-content-center gap-3 py-5">
        <button
          className="btn btn-dark"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
            setSuccess(false);
          }}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (page === FormTitle.length - 1) {
              axios
                .post("http://localhost:4000/create-pdf", formData)
                .then(() =>
                  axios.get("http://localhost:4000/fetch-pdf", {
                    responseType: "blob",
                  })
                )
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  setSuccess(true && res.status === 200);
                  saveAs(pdfBlob, "Resume.pdf");
                });
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
        </button>
      </div>
      {success && <Success />}
    </div>
  );
};

export default Form;

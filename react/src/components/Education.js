import React from "react";

const Education = ({ formData, setFormData }) => {
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your First Institute name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.eduSchool1}
            onChange={(e) => {
              setFormData({ ...formData, eduSchool1: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            Year you graduated
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.eduYear1}
            onChange={(e) => {
              setFormData({ ...formData, eduYear1: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
            Degree you pursued
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.eduQualification1}
            onChange={(e) => {
              setFormData({ ...formData, eduQualification1: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Enter a short description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.eduDesc1}
            onChange={(e) => {
              setFormData({ ...formData, eduDesc1: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your Second Institute name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.eduSchool2}
            onChange={(e) => {
              setFormData({ ...formData, eduSchool2: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            Year you graduated from your second institute
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.eduYear2}
            onChange={(e) => {
              setFormData({ ...formData, eduYear2: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
            Degree you pursued
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.eduQualification2}
            onChange={(e) => {
              setFormData({ ...formData, eduQualification2: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Enter a short description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.eduDesc2}
            onChange={(e) => {
              setFormData({ ...formData, eduDesc2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;

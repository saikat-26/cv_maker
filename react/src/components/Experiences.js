import React from "react";

const Experiences = ({ formData, setFormData }) => {
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your first company name you worked for
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.expOrg1}
            onChange={(e) => {
              setFormData({ ...formData, expOrg1: e.target.value });
            }}
          />
        </div>

        <div className="col-md-6">
          <label for="phone" className="form-label">
            What was your designation?
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.expPos1}
            onChange={(e) => {
              setFormData({ ...formData, expPos1: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            How many years you worked there for?
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.expDur1}
            onChange={(e) => {
              setFormData({ ...formData, expDur1: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Tell us about your job description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.expDesc1}
            onChange={(e) => {
              setFormData({ ...formData, expDesc1: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your Second company name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.expOrg2}
            onChange={(e) => {
              setFormData({ ...formData, expOrg2: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            What was your designation?
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.expPos2}
            onChange={(e) => {
              setFormData({ ...formData, expPos2: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
            How many years you worked there?
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.expDur2}
            onChange={(e) => {
              setFormData({ ...formData, expDur2: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Tell us about your job description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.expDesc2}
            onChange={(e) => {
              setFormData({ ...formData, expDesc2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Experiences;

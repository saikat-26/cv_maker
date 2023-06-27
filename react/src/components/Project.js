import React from "react";

const Project = ({ formData, setFormData }) => {
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            Name of project
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.projTitle1}
            onChange={(e) => {
              setFormData({ ...formData, projTitle1: e.target.value });
            }}
          />
        </div>

        <div className="col-md-6">
          <label for="phone" className="form-label">
            Link to project
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.projLink1}
            onChange={(e) => {
              setFormData({ ...formData, projLink1: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Description about project
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.projDesc1}
            onChange={(e) => {
              setFormData({ ...formData, projDesc1: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your Second Project Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.projTitle2}
            onChange={(e) => {
              setFormData({ ...formData, projTitle2: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            Link of second project
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.projLink2}
            onChange={(e) => {
              setFormData({ ...formData, projLink2: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.projDesc2}
            onChange={(e) => {
              setFormData({ ...formData, projDesc2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Project;

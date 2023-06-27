const Home = ({ formData, setFormData }) => {
    return (
        <div className="container d-flex justify-content-center flex-column">
            <h1 className="text-center">Create your resume with the help of few simple steps</h1>
            <div className="row g-3 d-flex mt-3 mb-3">
                <div className="col-12 d-flex justify-content-center">
                    <label for="photo" className="form-label"/>
                    <input type="file" />
                </div>
            </div>
        </div>
    )
}

export default Home;
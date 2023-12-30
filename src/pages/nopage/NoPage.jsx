import React,{useContext} from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";

const NoPage = () => {
  const context = useContext(MyContext);
  const {theme} = context;
  return (
    <Layout>
      <div className="m-auto mt-5 flex-col">
        <div className="m-auto mb-5">
          <img
            className="m-auto w-90 h-80"
            src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"
            alt="Page Not Found"
          />
        </div>

        <div className="p-5 flex-col  justify-center align-center">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Page Not Found
          </h2>
          <div className="m-auto w-80">
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="m-auto focus:outline-none text-white focus:ring-3 focus:ring-white font-medium rounded-lg text-md w-80 py-2 mb-5"
            style={{
              backgroundColor: theme === "dark" ? "#3D0C11" : "#538cfc",
            }}
          >
            Click Me!!! <br/>Let me take you to the Home Page 
          </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NoPage;

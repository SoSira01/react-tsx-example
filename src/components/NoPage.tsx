import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
      navigate('/'); 
    };
    
  return (
    <div className="flex items-center justify-center min-h-screen " data-theme="cupcake">
      <div className="text-center">
        <h1 className="text-4xl font-bold ">404</h1>
        <p className="text-lg ">Page Not Found</p>
        <p className="mt-4 ">
          Sorry, the page you are looking for does not exist.
        </p>
         <button
           className="mt-6 btn btn-info text-white"
           onClick={handleGoHome}
         >
             Go Back to Home Page
          </button>   

        </div>
    </div>
  );
};

export default NoPage;
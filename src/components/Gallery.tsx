import { Photo } from '../interfaces/Photo'; // Import the Photo interface
import React, { useEffect, useState } from 'react';
import { getPhotos } from '../services/photoService'; // Import the getPhotos function
import { AiOutlineFileImage } from "react-icons/ai"; // Import React icon
import { FiSun, FiMoon } from 'react-icons/fi'; // Import React icons for sun and moon
import { useNavigate } from 'react-router-dom';

function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]); // State to store Photo
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'cupcake';
  });
  const navigate = useNavigate();

  const fetchPhotos = async () => {
    try {
      const data = await getPhotos(); // Fetch data
      setPhotos(data); // Store data in state
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false); // Stop loading once data is fetched
    }
  };

  // Fetch photos from API when component loads
  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme); // Apply the theme to the document root
  }, [theme]);

  // Function to toggle between light and dark theme
  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme((prevTheme) => (prevTheme === 'cupcake' ? 'coffee' : 'cupcake'));
  };

  const GetStart = () => {
    navigate('/GetStart');
  };

  return (
    <div className="App">
      <div data-theme={theme}>
        <div className="navbar shadow-xl">

          <div className="flex-1 flex">
            <div className="tooltip tooltip-right" data-tip="Icon from React Icon">
              <AiOutlineFileImage className="h-10 w-10 text-blue-500 mr-2" />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Json MockUp from jsonplaceholder">
              <p className="text-xl font-bold">Sample Photo Gallery</p>
            </div>
          </div>

          {/* Center the "Get Start With React" text */}
          <div className="flex-none text-center px-5">
            <div className='tooltip tooltip-left' data-tip="Get Start With React + Vite">
              <button className="btn btn-primary" onClick={GetStart}>Get Start With React</button>
            </div>
          </div>

          <div className="flex-none tooltip tooltip-bottom" data-tip="Theme">
            {/* Theme Toggle with Swap */}
            <label className="swap swap-rotate">
              {/* Hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === 'coffee'} // Check if the theme is 'coffee'
              />

              {/* Sun icon (Visible when 'cupcake' theme is active) */}
              <FiSun className="swap-off h-6 w-6 fill-current mr-5" />

              {/* Moon icon (Visible when 'coffee' theme is active) */}
              <FiMoon className="swap-on h-6 w-6 fill-current mr-5" />
            </label>
          </div>
        </div>
        {/* Display loading message while data is being fetched */}
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="flex w-52 flex-col gap-4 items-center">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Render each photo inside a card , only 10*/}
              {photos.slice(0, 10).map((photo) => (
                <div key={photo.id} className="card bg-base-100 w-96 shadow-xl pt-5 border">
                  <figure>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{photo.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
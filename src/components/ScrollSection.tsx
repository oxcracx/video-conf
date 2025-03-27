import { Link } from "react-router-dom";
import img1 from "/src/assets/img1.jpg"; // Use the correct path based on your setup

export const ScrollSection = () => {
  return (
    <div className="h-screen bg-white text-black p-10 flex flex-col lg:flex-row items-center justify-between">

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={img1}
          alt="Scroll Section"
          className="w-4/5 h-auto max-w-md rounded-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-6">Start your meeting in an instant</h2>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <Link to="/video-conference">
          <button className="btn bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition">
            New Meeting
          </button>
        </Link>
      </div>

    </div>
  );
};

import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="h-[600px] w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col items-center text-center p-8">
          <div className="profile mb-6">
            <img
              className="h-36 w-36 rounded-full border-4 border-gray-300 shadow-md hover:scale-105"
              src="src/assets/6251244339082676970.jpg"
              alt="mypic"
            />
          </div>
          <div className="name text-2xl font-semibold text-gray-800 mb-2">
            <h4>
              <span className="text-red-500 font-bold">—</span> Sunny Saurya
            </h4>
          </div>    

          <div className="role text-gray-600 text-sm font-medium mb-6">
            <p className="font-bold">MERN Stack Developer & Automation</p>
          </div>
          <div className="bio text-gray-700 text-sm leading-relaxed px-4">
            <p className="overflow-hidden text-clip text-wrap">
             <span className="text-xl font-bold">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-shadow-black font-bold">Sunny Saurya</span>, ex
              deleniti optio perferendis minus aspernatur quod, ratione magnam
              velit tenetur voluptatem corporis odio, illo corrupti debitis. <span className="text-xl font-bold">"</span>
            </p>
          </div>
          <div>
            <button className=""></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

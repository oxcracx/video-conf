export const Banner = () => {
    return (
      <div className="hero bg-black min-h-screen px-6 pt-20">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-gray-300">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
  
          {/* Right Side - Login Form */}
          <div className="md:w-1/2 card bg-gray-900 text-white w-full max-w-sm shrink-0 shadow-2xl p-6 rounded-lg">
            <div className="card-body space-y-4">
              <label className="block text-lg font-semibold">Email</label>
              <input type="email" className="input input-bordered w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400" placeholder="Email" />
  
              <label className="block text-lg font-semibold">Password</label>
              <input type="password" className="input input-bordered w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400" placeholder="Password" />
  
              <div><a className="link link-hover text-primary">Forgot password?</a></div>
              <button className="btn bg-primary text-white w-full mt-4 rounded hover:bg-primary/80 transition">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
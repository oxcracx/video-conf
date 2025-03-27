export const Navbar = () => {
    return (
      <div className="navbar bg-black shadow-sm border-b border-gray-700 fixed top-0 w-full h-16 flex items-center z-50">
        {/* Left Side - Logo */}
        <div className="navbar-start pl-6 lg:pl-12">
          <a className="font-bold text-primary text-2xl">Vid X.</a>
        </div>
  
        {/* Center - Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li>
              <details>
                <summary>Features</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Blog</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
  
        {/* Right Side - Signup Button */}
        <div className="navbar-end space-x-4 pr-6">
          <a className="btn btn-outline btn-primary px-8 rounded-3xl">Signup</a>
        </div>
      </div>
    );
  };
  
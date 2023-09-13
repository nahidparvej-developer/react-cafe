

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-20">
                <div className="flex-1">
                    <a  href="" className="normal-case text-2xl text-bold text-black" >Knowledge Cafe</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/r7vjpDb/Ellipse-0.jpg" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
          <div className="mx-20 ">
           <hr />
          </div>
        </div>

        
    );
};

export default Header;
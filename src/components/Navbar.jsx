function Navbar() {
  return (
    <>
      <div className="w-full p-8 flex items-center justify-between">
        <div className="w-36 h-14 flex items-center justify-center" style={{'backgroundColor':'#f2a70c','borderRadius':'28px'}}>
           <img src="https://assets.website-files.com/6005526df587c631c25dcda8/602e20b80132182b67afebf9_Logo%20Icon.svg" style={{'height':'35px'}} />
          <h1 className="text-black font-bold text-2xl ml-2 leading-none">Mudit</h1>
        </div>
        <div>
          <h1 className="font-bold text-sm ml-2 leading-none" style={{'color':'#f2a70c'}}>Available for new projects</h1>
        </div>
        <div className="w-36 h-14 flex items-center justify-between rounded px-4" style={{'backgroundColor':'#f2a70c'}}>
          <h1 className="text-black font-bold text-sm leading-none">MENU</h1>
          <div className="flex flex-col">
            <div className="hamburgerline" ></div>
            <div className="hamburgerline" ></div>
            <div className="hamburgerline" ></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
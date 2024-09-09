import searchIcon from "../../../assets/icons/Search.svg"
const SearchBar = () => {
    return ( 
        <header className="flex items-center justify-between py-6 px-4 sm:px-6 md:px-8 lg:px-10 bg-white">
            <h4>Hotspots</h4>
            <div>
                <input type="search" id="search" placeholder="Search for your hotspots" className="bg-White text-[#8A9292] border rounded-lg px-4 py-3 pl-12"   style={{
                        backgroundImage: `url(${searchIcon})`,
                        backgroundPosition: '10px center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <img src="" alt="" />
            </div>
        </header>
     );
}
 
export default SearchBar;
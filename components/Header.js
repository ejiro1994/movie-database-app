import Image from "next/image";
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <div className="bg-[#040714] sticky top-0 z-[1000] flex items-center h-[72px] px-10 md:px-12">
            <Image
                src="/images/sky5x.webp"
                width={70}
                height={70}
                className='cursor-pointer'
                draggable='false'
            />
            <div className="hidden ml-10 md:flex items-center space-x-6">
                <a className="header-link group">
                    <HomeIcon className="h-4" />
                    <span className="span capitalize select-none">home</span>
                </a>
                <a className="header-link group">
                    <SearchIcon className="h-4" draggable='false'/>
                    <span className="nav-link">search</span>
                </a>
                <a className="header-link group">
                    <PlusIcon className="h-4" draggable='false'/>
                    <span className="nav-link">watchlist</span>
                </a>
                <a className="header-link group">
                    <StarIcon className="h-4" draggable='false'/>
                    <span className="nav-link">originals</span>
                </a>
                <a className="header-link group">
                    <img src="/images/movie-icon.svg" alt="" className="h-5 select-none" draggable='false'/>
                    <span className="nav-link">movies</span>
                </a>
                <a className="header-link group">
                    <img src="/images/series-icon.svg" alt="" className="h-5 select-none" draggable='false'/>
                    <span className="nav-link">series</span>
                </a>
            </div>



            {/* {Object.values(providers.map((provider) => (
                <div key={provider.name}>
                    <div>
                        <button className="select-none uppercase ml-auto border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
                        onClick={() => signIn(provider.id, {callbackUrl: '/'})}
                        >
                            login
                        </button>
                    </div>
                </div>
            )))} */}
        </div>
    );
}

export default Header;


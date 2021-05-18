import Link from 'next/link'
import { useContext } from 'react'
import ButtonWrapper from '../inputs/buttonWrapper'
import SearchContext from '../context/searchConext'
import SearchIcon from '../icons/searchIcon'
import UserIcon from '../icons/userIcon'
import TextStyle3 from '../textStyles/TextStyle3'
import SearchInput from '../inputs/searchInput'

const Header = () => {
    const {isSearchOpen, setisSearchOpen, searchValue, setSearchValue} = useContext(SearchContext)
    return (
        <>
        <div className={`h-22 flex-shrink-0 w-full fixed top-0 left-0 px-20 z-40 bg-black flex items-center text-main-text justify-between`}>
            <div className={`flex items-center`}>
                <div 
                style={{
                    fontSize: "38px"
                }}
                className={`font-bold`}>
                LURE
                </div>
            </div>
            <div className={`flex w-full justify-between items-center ml-12`}>
            <div className={`flex w-full h-12 transition-all duration-200 overflow-hidden items-center relative`}>
                    <Link passHref href={"/catalog"}>
                        <a className={``}>
                            <TextStyle3>
                            Каталог
                            </TextStyle3>
                        </a>
                    </Link>
                    <Link passHref href={"/my-playlists"}>
                        <a className={`ml-12`}>
                            <TextStyle3>
                            Мои плейлисты
                            </TextStyle3>
                        </a>
                    </Link>
                    <div className={`absolute right-0 w-full ${!isSearchOpen ? "max-w-0" : "max-w-full pr-7 pl-8"} transition-all duration-500 h-full bg-black flex items-center origin-right overflow-hidden`}>
                        <SearchInput label="" name={`search`} type={`text`} state={searchValue} setState={setSearchValue} placeholder={`Поиск фильмов и сериалов по названию`}/>
                    </div>
            </div>
            <div className={`flex items-center`}>
                <ButtonWrapper 
                handler={() => {
                    if (!isSearchOpen) {
                        setisSearchOpen(true)
                    }

                }} 
                commonClassName={`rounded`} 
                className={`p-2`}>
                    <div className={`${!isSearchOpen ? "w-6 h-6" : "w-20"} transition-all duration-200 text-center`}>
                        {isSearchOpen ? "Искать" : <SearchIcon/>}
                    </div>
                </ButtonWrapper>
                <div className={`ml-3 relative`}>
                <div className={`${isSearchOpen ? "opacity-0" : "opacity-100"} transition-all duration-200`}>
                <ButtonWrapper commonClassName={`rounded`} className={`p-2`}>
                    <div  className={`flex items-center`}>
                        <div className={`w-6 h-6 mr-2`}>
                            <UserIcon/>
                        </div>
                        <TextStyle3>
                            Профиль
                        </TextStyle3>
                    </div>
                </ButtonWrapper>
                </div>
                <div 
                onClick={() => {
                    setisSearchOpen(false)
                }}
                className={`absolute top-0 left-0 w-full h-full ${isSearchOpen && "z-10"} ${!isSearchOpen ? "opacity-0" : "opacity-100"} transition-all duration-200 flex justify-center items-center select-none cursor-pointer`}>
                Закрыть
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className={`flex-shrink-0 h-22 w-full`}>
        
        </div>
        </>
    )
}

export default Header 
import { MutableRefObject, useEffect, useRef, useState } from "react"
import EyeIcon from "../icons/eyeIcon"
import FiltersIcon from "../icons/filtersIcon"
import SearchIcon from "../icons/searchIcon"
import validator from "./validator"

export interface InputProps  {
    label: string,
    name: string,
    type?: string,
    placeholder?:string,
    disabled?: boolean,
    state: string,
    validator?: Function,
    error?: boolean,
    setError?: Function,
    setState: Function,
    errorMessage?: string,
    onBlur?: Function,
}

const sub = validator
const SearchInput = ({
    label, 
    name, 
    disabled, 
    type="text", 
    placeholder="", 
    state, 
    setState, 
    validator=sub.true, 
    error=false,
    setError=()=>{}, 
    errorMessage="Ошибка!"}:InputProps) => {

    const [realType, setRealType] = useState(type)
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>

    const [focused, setFocued] = useState(false)

    useEffect(() => {
        var event = new CustomEvent("refreshDropdown");
        window.dispatchEvent(event)
    },[error])
    
    return (
        <label className="block w-full relative">
            <div className={`h-auto items-center flex group mt-3`}>
            <input autoComplete={"off"} type={realType} name={name} className={`border-b-2 pb-3 focus:outline-none bg-popupBackground w-full text-sm bg-transparent text-white ${error ? "border-error-red" : "focus:border-redhead hover:border-white"} border-input-inactive leading-snug  transition-all duration-200 ease-out flex pl-10`} 
            placeholder={placeholder}
            disabled={disabled}
            value={state} 
            onFocus={
            () => {
                setFocued(true)
            }}
            onBlur = {() => {
                setFocued(false)
            }}
            onChange={(e) => {
                setState(e.target.value)
                if (error) {
                    setError(!validator(e.target.value))
                }
            }} ref={inputRef}/>
            <div 
            tabIndex={-1}
            className={`flex-shrink-0 cursor-pointer w-full absolute top-0 h-full items-center flex `}
            >
                <div className={`w-6 h-6 ${focused ? "text-redhead" : "text-input-inactive lg:group-hover:text-white"}`}>
                <SearchIcon/>
                </div>
                <div 
                onClick={(e) => {
                    e.preventDefault()
                    console.log("pomidorka")
                }}
                className={`absolute right-0 w-7 h-7 z-20 hover:text-redhead`}>
                <FiltersIcon/>
                </div>
                    
            </div>
            </div>
            <div className={`flex mt-2 ${!error && "hidden"}`}>
            <img src="/icons/warning.svg" className={`flex-shrink-0 w-5 h-5 mr-1 mt-0.5`} alt=""/>
            <div dangerouslySetInnerHTML={{__html: errorMessage}} className={`text-error-red text-sm`}></div>
            </div>
        </label>
    )
}

export default SearchInput
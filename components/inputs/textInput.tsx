import { MutableRefObject, useEffect, useRef, useState } from "react"
import EyeIcon from "../icons/eyeIcon"
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
const TextInput = ({
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

    useEffect(() => {
        var event = new CustomEvent("refreshDropdown");
        window.dispatchEvent(event)
    },[error])
    
    return (
        <label className="block w-full relative">
            <div className={`h-auto items-center flex  mt-3`}>
            <input  type={realType} name={name} className={`border-b-2 pb-4 focus:outline-none bg-popupBackground w-full text-sm bg-transparent text-white ${error ? "border-error-red" : "focus:border-opacity-100 hover:border-opacity-100"} border-input-inactive leading-snug  transition-all duration-200 ease-out flex`} 
            placeholder={placeholder}
            disabled={disabled}
            value={state} 
            onChange={(e) => {
                setState(e.target.value)
                if (error) {
                    setError(!validator(e.target.value))
                }
            }} ref={inputRef}/>
            <div 
            tabIndex={-1}
            className={`flex-shrink-0 cursor-pointer w-8 absolute right-4 ${type !== "password" && "hidden"}`} onMouseDown={() => {
                setRealType("text")
            }}
            onTouchStart={() => {
                setRealType("text")
            }}
            onMouseUp={() => {
                setRealType(type)
            }}
            onTouchEnd={() => {
                setRealType(type)
            }}
            >
                    <EyeIcon/>
            </div>
            </div>
            <div className={`flex mt-2 ${!error && "hidden"}`}>
            <img src="/icons/warning.svg" className={`flex-shrink-0 w-5 h-5 mr-1 mt-0.5`} alt=""/>
            <div dangerouslySetInnerHTML={{__html: errorMessage}} className={`text-error-red text-sm`}></div>
            </div>
        </label>
    )
}

export default TextInput
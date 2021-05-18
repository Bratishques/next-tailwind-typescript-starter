const ButtonWrapper = ({
    className="",
    commonClassName="",
    children,
    handler=()=>{}
}) => (
    <div 
    onClick={handler}
    className={`relative group rounded select-none`}>
        <div className={`relative z-10 bg-opacity-10 border-2 transition-all duration-300 border-white lg:group-hover:border-transparent  bg-white cursor-pointer ${className} ${commonClassName}`}>
        {children}
        </div>
        <div className={`absolute top-0 left-0 w-full h-full opacity-0 lg:group-hover:opacity-100 transition-all duration-300 bg-gradient-to-l from-grad-1 to-grad-2 ${commonClassName}`}>

        </div>
    </div>
)

export default ButtonWrapper
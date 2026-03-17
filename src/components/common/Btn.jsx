import Icons from './Icons'

function Button(props) {
    return (
        <button className={`font-Montserrat   border-2 border-[#2B2B2B] rounded-[200px]  text-nowrap cursor-pointer text-[#2B2B2B] text-body font-semibold  leading-[100%] tracking-[0%] ${props.className} `}>
            {props.text}
            <span><Icons icon={props.icon} /></span>
        </button>
    )
}

export default Button
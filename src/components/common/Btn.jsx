import Icons from './Icons'

function Button(props) {
    return (
        <button className={`font-Montserrat border-2 border-primary rounded-[200px] text-nowrap cursor-pointer text-primary text-body font-semibold leading-100 tracking-normal ${props.className}`}>
            {props.text}
            <span><Icons icon={props.icon} /></span>
        </button>
    )
}

export default Button
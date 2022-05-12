
import classes from "./Button.module.css"

const Button = (props) => {
    return (
        <div>
            <buttons className={classes.button}>{props.children}</buttons>
        </div>
    )

}

export default Button;
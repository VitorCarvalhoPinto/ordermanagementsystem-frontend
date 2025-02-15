import classNames from "classnames";

const Button = ({ text, onClickFunction, className, disabled = false }) => {
    return (
        <button
            className={classNames("px-4 py-2  text-white rounded", className)}
            onClick={onClickFunction}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;
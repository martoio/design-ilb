import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button = function Button(props: ButtonProps) {
    return (
        <button {...props} >Hello</button>
    );
}

export default Button;
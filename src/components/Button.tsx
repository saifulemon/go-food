import React from 'react';

type buttonProps = {
    children: React.ReactNode;
}
const Button = (props: buttonProps) => {
    return (
        <div>
          <button>{props.children}</button>  
        </div>
    );
};

export default Button;
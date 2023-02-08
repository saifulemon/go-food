import React, {CSSProperties} from 'react';

type textStyleProps = {
    textStyle: CSSProperties;
}
 
const TextStyle = (props: textStyleProps) => {
    return (
        <div>
            <h3 style={props.textStyle}>Hello World</h3>
        </div>
    );
};

export default TextStyle;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UnControlled as CodeMirror } from "react-codemirror2";
import Skeleton from "react-loading-skeleton";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

/**
 * Name: CodePreview
 */
const CodePreview = ({ value, mode = "javascript" }) => {
    const [modeLoaded, setModeLoaded] = useState(false);

    useEffect(() => {
        import(`codemirror/mode/${mode}/${mode}.js`).then(() => {
            setModeLoaded(true);
        });
    }, [mode]);
    return (
        <Wrapper className="code-preview">
            {modeLoaded ? (
                <CodeMirror
                    value={value}
                    options={{
                        mode,
                        theme: "monokai",
                        lineNumbers: true,
                        readOnly: true,
                    }}
                />
            ) : (
                <Skeleton variant="rect" height={300} />
            )}
        </Wrapper>
    );
};

export default React.memo(CodePreview);

const Wrapper = styled.div``;

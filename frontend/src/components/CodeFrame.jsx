import { CopyBlock, dracula } from "react-code-blocks";

const CodeFrame = () => {
    return (
        <CopyBlock
            text={'<script src="http://localhost:4000/api/sendScript"></script>'}
            language='javascript'
            showLineNumbers={false}
            theme={dracula}
            codeBlock
        />
    )
}

export default CodeFrame;

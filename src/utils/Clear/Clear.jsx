import { PrimaryButton } from "../";

function Clear({ setText }) {

    const handleClear = () => {
        setText('');
    };
    return (
        <PrimaryButton
            onClick={handleClear}
            children="Clear" />
    )
}

export default Clear
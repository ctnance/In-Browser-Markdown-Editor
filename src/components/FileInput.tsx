import { FC } from "react";
import IconDocument from "../assets/icon-document.svg";

const FileInput: FC = () => {
  return (
    <div className="file-input">
      <img className="file-input--icon" src={IconDocument} alt="document icon" />
      <input className="file-input--input" type="text" value="placeholder.md" />
    </div>
  )
}

export default FileInput;
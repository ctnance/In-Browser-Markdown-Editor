import { FC } from "react";
import IconSave from "../../assets/icon-save.svg";

const SaveFileButton: FC = () => {
  return (
    <button className="btn save-file-btn"><img className="save-file-btn--icon" src={IconSave} alt="button icon" /></button>
  )
}

export default SaveFileButton;
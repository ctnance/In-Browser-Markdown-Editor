import IconSave from "../../assets/icon-save.svg";

function SaveFileButton() {
  return (
    <button className="btn save-file-btn"><img className="save-file-btn--icon" src={IconSave} alt="button icon" /></button>
  )
}

export default SaveFileButton;
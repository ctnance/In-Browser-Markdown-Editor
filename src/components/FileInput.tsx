import IconDocument from "../assets/icon-document.svg";

function FileInput() {
  return (
    <div className="file-input">
      <img className="file-input--icon" src={IconDocument} alt="document icon" />
      <input className="file-input--input" type="text" value="placeholder.md" />
    </div>
  )
}

export default FileInput;
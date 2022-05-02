import IconShowPreview from "../../assets/icon-show-preview.svg";
import IconHidePreview from "../../assets/icon-hide-preview.svg";

interface Props {
  previewActive: boolean,
  togglePreview: () => void
}

function PreviewButton({ previewActive, togglePreview }: Props) {

  return (
    <button className="btn preview-btn" onClick={togglePreview}><div className="preview-btn--icon-container">
      <img className={`preview-btn--icon ${previewActive ? "show-preview" : "hide-preview"}-icon`} src={previewActive ? IconShowPreview : IconHidePreview} alt="button icon" />
    </div></button>
  )
}

export default PreviewButton;
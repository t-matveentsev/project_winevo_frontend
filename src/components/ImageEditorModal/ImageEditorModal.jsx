import { useState, useMemo } from "react";
import Cropper from "react-easy-crop";
import s from "./ImageEditorModal.module.css";
import cropImage from "../../helpers/cropImage";

export default function ImageEditorModal({
  src,
  onCancel,
  onApply,
  aspect = 1,
}) {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const canApply = useMemo(
    () => !!src && !!croppedAreaPixels,
    [src, croppedAreaPixels]
  );

  const onCropComplete = (_, croppedPixels) =>
    setCroppedAreaPixels(croppedPixels);

  const handleApply = async () => {
    if (!canApply) return;
    const { file, url } = await cropImage(
      src,
      croppedAreaPixels,
      0.9,
      "image/webp"
    );
    onApply({ file, previewUrl: url });
  };

  return (
    <div
      className={s.overlay}
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div className={s.modal}>
        <div className={s.cropArea}>
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            zoomWithScroll
            restrictPosition
          />
        </div>

        <div className={s.controls}>
          <label>
            Zoom
            <input
              type="range"
              min="1"
              max="3"
              step="0.01"
              value={zoom}
              onChange={(e) => setZoom(+e.target.value)}
            />
          </label>

          <div className={s.actions}>
            <button type="button" onClick={onCancel} className={s.btnGhost}>
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApply}
              disabled={!canApply}
              className={s.btnPrimary}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

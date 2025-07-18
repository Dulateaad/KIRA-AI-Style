import { useState } from "react";
export default function UploadPhoto({ go, setPhoto }) {
  const [preview, setPreview] = useState(null);
  const handleFile = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => { setPreview(reader.result); };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-4">
      <input type="file" accept="image/*" onChange={handleFile} />
      {preview && (
        <>
          <img src={preview} className="mt-4 rounded w-40" alt="Preview"/>
          <button onClick={() => { setPhoto(preview); go("home"); }} className="btn mt-4">Сохранить фото</button>
        </>
      )}
    </div>
  );
}
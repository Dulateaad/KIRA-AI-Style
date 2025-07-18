import { useState } from "react";
export default function Wardrobe({ go, items, setItems }) {
  const [file, setFile] = useState(null);
  const reader = e => {
    const f = e.target.files[0];
    if (f) {
      const r = new FileReader();
      r.onload = () => setFile(r.result);
      r.readAsDataURL(f);
    }
  };
  const add = () => { setItems([...items, file]); setFile(null); };
  return (
    <div className="p-4">
      <input type="file" accept="image/png" onChange={reader}/>
      {file && <img src={file} className="w-32 mt-4"/>}
      <button onClick={add} className="btn mt-2">Добавить одежду</button>
      <div className="flex flex-wrap mt-4">
        {items.map((it, i) => <img key={i} src={it} className="w-24 m-1"/>)}
      </div>
      <button onClick={() => go("home")} className="btn mt-4">Назад</button>
    </div>
  );
}
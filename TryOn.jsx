import { useState } from "react";
import AIAdvisor from "./AIAdvisor";

export default function TryOn({ go, photo, clothes }) {
  const [selected, setSelected] = useState(null);
  const overlay = selected != null ? clothes[selected] : null;
  return (
    <div className="p-4">
      <div className="relative">
        <img src={photo} className="w-full max-w-xs mx-auto"/>
        {overlay && <img src={overlay} className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2"/>}
      </div>
      <div className="mt-4 flex space-x-2 overflow-x-auto">
        {clothes.map((it,i)=>
          <img key={i} src={it} className="w-20 cursor-pointer border" onClick={()=>setSelected(i)}/>
        )}
      </div>
      <AIAdvisor imageBase64={photo}/>
      <button onClick={()=>go("wardrobe")} className="btn mt-4">Добавить одежду</button>
      <button onClick={()=>go("home")} className="btn mt-2">Главная</button>
    </div>
  );
}
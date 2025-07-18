import { useState } from "react";
import Home from "./components/Home";
import UploadPhoto from "./components/UploadPhoto";
import TryOn from "./components/TryOn";
import Wardrobe from "./components/Wardrobe";

export default function App() {
  const [page, setPage] = useState("home");
  const [photo, setPhoto] = useState(null);
  const [items, setItems] = useState([]);

  const go = (p) => setPage(p);

  return (
    <div>
      {page === "home" && <Home go={go} photo={photo} />}
      {page === "upload" && <UploadPhoto go={go} setPhoto={setPhoto} />}
      {page === "tryon" && <TryOn go={go} photo={photo} clothes={items} />}
      {page === "wardrobe" && <Wardrobe go={go} items={items} setItems={setItems} />}
    </div>
  );
}
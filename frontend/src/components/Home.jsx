export default function Home({ go, photo }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Примерочная AI</h1>
      {photo ? (
        <button onClick={() => go("tryon")} className="btn">Примерить одежду</button>
      ) : (
        <button onClick={() => go("upload")} className="btn">Загрузить своё фото</button>
      )}
    </div>
  );
}
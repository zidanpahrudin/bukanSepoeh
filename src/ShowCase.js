import { useState } from "react";

export default function ShowCase() {
  const [zoom, setZoom] = useState(false);

  return (
    <div
      id="unityContainer"
      style={{ width: "960px", height: "500px", margin: "auto" }}
    ></div>
  );
}

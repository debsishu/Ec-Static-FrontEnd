import React, { useState } from "react";
import uploadImage from "../helper/UploadImage";
import { TailSpin } from "react-loading-icons";

// This is an example of how to use the UploadImage helper function
function UploadFileTemp() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function helper() {
    setLoading(true);
    const res = await uploadImage(image);
    setUrl(res);
    setLoading(false);
  }

  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={helper}>Upload</button>
      {loading && <TailSpin />}
      {url && <a href={url}>Go to link</a>}
    </div>
  );
}

export default UploadFileTemp;

import React, { useState } from "react";

export default function ImageUpload() {
  const [photo, SetPhoto] = useState("");
  const handleFile = (event) => {
    SetPhoto(event.target.files[0]);

    function HandleUp() {
      const formData = new FormData();
      formData.append("photo", photo);
      fetch("http://localhost:41827/api/MedicineMaster", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("sucess", result);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  return (
    <div>
      <form>
        Photo <input type="file" onChange={handleFile} />
        <button onSubmit={FormData}>Upload</button>
      </form>
    </div>
  );
}

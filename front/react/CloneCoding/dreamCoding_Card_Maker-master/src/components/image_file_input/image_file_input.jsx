import React, { useRef, useState, memo } from "react";
import styles from "../image_file_input/image_file_input.module.css";
const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const [Loding, setLoding] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    setLoding(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoding(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!Loding && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No file"}
        </button>
      )}
      {Loding && <div className={styles.loading}></div>}
    </div>
  );
});

export default ImageFileInput;

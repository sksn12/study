import React, { memo, useRef, useState } from "react";
import Button from "../button/button";
import styles from "../card_add_form/card_add_form.module.css";

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });
  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
      >
        <option placeholder="light">Light</option>
        <option placeholder="dark">Dark</option>
        <option placeholder="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={styles.testarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} file={file} />
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
});

export default CardAddForm;

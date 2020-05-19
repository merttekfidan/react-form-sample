import React, { useState, useContext } from "react";
import { Context } from "../Store";

function Form() {
  const [state, dispatch] = useContext(Context);
  const [title, setTitle] = useState("");
  const [formState, setFormState] = useState({ form: { title: "", body: "" } });
  function formHandle(e) {
    e.preventDefault();
    dispatch({ type: "TEST", title: "asd" });

    setFormState({ form: { title: "dsa" } });
    console.log(formState.form.body);
  }
  function setForm({ title, body }) {
    setFormState({ form: { title, body } });
    return formState;
  }
  return (
    <div>
      {formState.form.title}
      {formState.form.body}
      <form onSubmit={formHandle}>
        <div>
          title:
          <input
            onChange={(e) => setForm({ ...formState, title: e.target.value })}
            name="title"
          />
        </div>
        <div>
          Body :
          <input
            onChange={(e) => setForm({ ...formState, body: e.target.value })}
            name="body"
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Form;

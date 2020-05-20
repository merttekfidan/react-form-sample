import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Store";
import { getPost, postPost, testPost } from "./Api";
import List from "./List";
function Form() {
  const [state, dispatch] = useContext(Context);
  const [data, setData] = useState([]);
  const [formState, setFormState] = useState({ title: "", body: "" });
  function formHandle(e) {
    e.preventDefault();
    dispatch({
      type: "SUBMIT",
      payload: { title: formState.title, body: formState.body },
    });
  }
  function getData() {
    getPost().then((res) => setData(res.data));
  }

  useEffect(() => {
    getData();
    console.log(state);
  }, [state]);
  return (
    <div>
      {console.log("asd")}
      <form onSubmit={formHandle}>
        <div>
          title:
          <input
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
            name="title"
          />
        </div>
        <div>
          Body :
          <input
            onChange={(e) =>
              setFormState({ ...formState, body: e.target.value })
            }
            name="body"
          />
        </div>
        <button
          onClick={() => {
            postPost({
              userId: 1,
              title: formState.title,
              body: formState.body,
            }).then((res) => getData());
          }}
        >
          Test
        </button>
      </form>
      <List props={data} />
    </div>
  );
}

export default Form;

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function generateUniqueId() {
  return uuidv4();
}

function MainBody() {
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );

  const formik = useFormik({
    initialValues: { task: "" },

    onSubmit: (values, { resetForm }) => {
      values["id"] = generateUniqueId();
      setTodoItems([...todoItems, values]);
      toast.success("Task added", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 800,
        hideProgressBar: true,
      });
      resetForm();
    },

    validate: (values) => {
      const errors = {};
      if (!values.task) {
        errors.task = "Please enter valid value";
      }
      return errors;
    },
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleDelete = (id) => {
    const updatedItems = todoItems.filter((item) => item.id !== id);
    toast.error("Task deleted", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 800,
      hideProgressBar: true,
    });
    setTodoItems(updatedItems);
  };

  return (
    <>
      <ToastContainer />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>

                  <form
                    className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="col-12">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="task">
                          Enter a task here
                        </label>
                        <input
                          type="text"
                          id="task"
                          name="task"
                          className="form-control"
                          onChange={formik.handleChange}
                          value={formik.values.task}
                        />
                        {formik.errors.task && formik.touched.task && (
                          <div style={{ color: "red" }}>
                            {formik.errors.task}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Add Task
                      </button>
                    </div>
                  </form>

                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {todoItems.length > 0 ? (
                        todoItems.map((item) => (
                          <tr key={item.id}>
                            <td>{item.task}</td>
                            <td>In progress</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleDelete(item.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="text-center">
                            No items found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainBody;

import React from "react";

const AddHabits = () => {
  return (
    <div className="quotes-section habit">
      <div className="habits-form">
        <form>
          <div className="habits-form__inputs">
            <div className="tasks">
              <h3>Your task</h3>
              <input
                type="text"
                className="task-input"
                placeholder="enter tasks"
              />
            </div>
            <div className="time-allocated">
              <h3>Time</h3>
              <input type="time" className="time-input" /> <span>to</span>
              <input type="time" className="time-input" />
            </div>
            <button className="submitButton" type="submit">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="progressing-habits">
        <table>
          <tr>
            <th>Tasks</th>
            <th>Time</th>
            <th>Status</th> <th>Delete</th>
          </tr>
          <tr>
            <td>wake-up</td>
            <td>06:00-06:15</td>
            <td>
              <span>
                <i class="fa-solid fa-calendar-check"></i>
              </span>{" "}
              <span>
                <i class="fa-solid fa-calendar-xmark"></i>
              </span>
            </td>
            <td>
              <button className="delete-button">
                Delete{" "}
                <span>
                  <i class="fa-solid fa-trash-can"></i>
                </span>
              </button>
            </td>
          </tr>
          <tr>
            <td>wake-up</td>
            <td>06:00-06:15</td>
            <td>
              <span>
                <i class="fa-solid fa-calendar-check"></i>
              </span>{" "}
              <span>
                <i class="fa-solid fa-calendar-xmark"></i>
              </span>
            </td>
            <td>
              <button className="delete-button">
                Delete{" "}
                <span>
                  <i class="fa-solid fa-trash-can"></i>
                </span>
              </button>
            </td>
          </tr>
          <tr>
            <td>wake-up</td>
            <td>06:00-06:15</td>
            <td>
              <span>
                <i class="fa-solid fa-calendar-check"></i>
              </span>{" "}
              <span>
                <i class="fa-solid fa-calendar-xmark"></i>
              </span>
            </td>
            <td>
              <button className="delete-button">
                Delete{" "}
                <span>
                  <i class="fa-solid fa-trash-can"></i>
                </span>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddHabits;

import { useSelector } from "react-redux";
import { deleteData } from "../../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { editData } from "../../features/todo/todoSlice";
function Table({ tableData, onhandleCallBack, onHandleDelete }) {
  const dispatch = useDispatch();
  //  console.log(uuidv4(), "uuid");
  console.log(tableData, "Edit waly ma");
  const dataofemployess = useSelector((dataofemployee) => dataofemployee);
  console.log(dataofemployess, "not array");
  console.log(dataofemployess.emloyees, "Employes data in array");
  const handleEdit = (id, data) => {
    console.log(data, "in edit");
    dataofemployess.emloyees.find((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        onhandleCallBack(task);
      }
    });
    //  setTasks(editedTaskList);
    console.log("id function", id);
    // dispatch(editData(data));
  };
  const handleDelete = (item) => {
    // let filteredArray = tableData.filter(
    //   (tableitem) => item.id !== tableitem.id
    // );
    // onHandleDelete(filteredArray);
    dispatch(deleteData(item.id));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Full Name</th>
          <th>Email Address</th>
          <th>Salary</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dataofemployess.emloyees.map((data, index) => {
          return (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{data.fullName}</td>
              <td>{data.emailAddress}</td>
              <td>{data.salary}</td>

              <td>
                <button onClick={() => handleEdit(data.id, data)}>Edit</button>
              </td>

              <td>
                <button onClick={() => handleDelete(data)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

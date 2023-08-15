function Table({ tableData, onhandleCallBack, onHandleDelete }) {
  //  console.log(uuidv4(), "uuid");
  console.log(tableData, "Edit waly ma");
  const handleEdit = (id) => {
    tableData.find((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        onhandleCallBack(task);
      }
    });
    //  setTasks(editedTaskList);
    console.log("id function", id);
  };
  const handleDelete = (item) => {
    let filteredArray = tableData.filter(
      (tableitem) => item.id !== tableitem.id
    );
    onHandleDelete(filteredArray);
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
        {tableData.map((data, index) => {
          return (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{data.fullName}</td>
              <td>{data.emailAddress}</td>
              <td>{data.salary}</td>

              <td>
                <button onClick={() => handleEdit(data.id)}>Edit</button>
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

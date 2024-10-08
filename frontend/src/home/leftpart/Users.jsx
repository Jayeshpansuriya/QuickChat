import React from "react";
import User from "./User";
import useGetAllUser from "../../context/useGetAllUsers"
const Users = () => {
  const [allUsers,loading] = useGetAllUser();
  console.log(allUsers)
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-sm">
        Message
      </h1>
      <div className="py-2 flex-1 overflow-y-auto" style={{maxHeight: "calc(85.5vh - 10vh)"}}>
        {allUsers.map((value,index) => (
          <User key={index} user={value}/>
        ))
      }
      </div>
    </div>
  );
};

export default Users;

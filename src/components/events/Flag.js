import React from "react";
import Icon from "../Icon";
import Paper from "@mui/material/Paper";

export default function Flag() {
  return (
    <Paper elevation={3}>
      <div className="rounded text-center bg-yellow-400 p-2 my-3">
        <div className="text-center rounded text-white text-base p-2 my-2 text-sm cursor-pointer mx-auto flex justify-center items-center">
          <div className="text-white flex items-center">
            When
            <Icon
              name="flag"
              size={15}
              className="text-green-600 mx-2"
            />
            clicked
          </div>
        </div>
      </div>
    </Paper>
  );
}

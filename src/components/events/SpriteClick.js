import React from "react";
import Paper from "@mui/material/Paper";

export default function SpriteClick() {
  return (
    <Paper elevation={3}>
      <div className="rounded text-center bg-yellow-400 p-2 my-3">
        <div className="text-center rounded text-white text-base p-2 my-2 text-sm cursor-pointer mx-auto flex justify-center items-center">
          <div className="text-white flex items-center">When this sprite clicked</div>
        </div>
      </div>
    </Paper>
  );
}

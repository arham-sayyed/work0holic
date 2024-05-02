import * as React from "react";
import Button from "@mui/material/Button";

function MyButton({ value, onClick=()=>{console.log('hello');} }) {
  return (
    <Button variant="contained" onClick={onClick}>
      {value}
    </Button>
  );
}

export default MyButton;




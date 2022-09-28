import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
export default function TournamentList({ input }) {
  console.log("tournament is", input);
  let [open, setOpen] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };
  //need to make Match Component to handle what match data I am giving
  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText input={input} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText />
            "Order vs G2 Esports"
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText />
            "Evil Geniuses vs G2 Esports"
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText />
            "Order vs Evil Geniuses"
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

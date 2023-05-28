import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { menu } from "../sidebar/menu";
import { Grid, IconButton, Typography } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

export default function Sidebar() {
  const [selected, setSelected] = React.useState("");
  const [childSelected, setChildSelected] = React.useState("");

  const handleClick = (array, title) => {
    if (selected !== title) {
      setSelected(title);
      setChildSelected();
    } else {
      setSelected("");
    }
  };

  return (
    <Grid container direction={"column"} bgcolor={"black"}>
      <Grid
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          minHeight: `calc(100vh - 0px)`,
        }}
        position={"relative"}
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ paddingX: 0 }}
            >
              <Grid paddingY={2} bgcolor={"#F5F5F5"}>
                <Typography variant="h6">Sidebar Material UI</Typography>
              </Grid>
            </ListSubheader>
          }
        >
          {menu.map((list, index) => (
            <Grid>
              <ListItemButton
                onClick={(e) => handleClick(list.items, list.title)}
                selected={selected === list.title && !childSelected}
              >
                <ListItemIcon>{list.icon}</ListItemIcon>
                <ListItemText primary={list.title} />
              </ListItemButton>
              <Collapse
                in={selected === list.title}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {list.items !== undefined &&
                    list.items.map((item, index) => (
                      <>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          onClick={() => setChildSelected(item.title)}
                          selected={childSelected === item.title}
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </>
                    ))}
                </List>
              </Collapse>
            </Grid>
          ))}
        </List>
        <Grid position={"absolute"} bottom={100} left={50}>
          <IconButton>
            <Person2OutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

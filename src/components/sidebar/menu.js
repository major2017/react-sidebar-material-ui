import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Home",
    items: []
  },
  {
    icon: <LocalLibraryOutlinedIcon />,
    title: "Education",
    items: [
      {
        title: "Technical Analysis",
        icon: <AutoGraphOutlinedIcon/>
      },
      {
        title: "Fundamental Analysis",
        icon: <LocalLibraryOutlinedIcon />
      }
    ]
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "Options",
    items: []
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Blog",
    items: []
  },
  {
    icon: <SettingsInputComponentOutlinedIcon />,
    title: "Settings",
    items: [
        {
            title: "Account",
            icon: <AccountCircleOutlinedIcon/>
          },
          {
            title: "Security",
            icon: <SecurityOutlinedIcon />
          },
          {
            title: "Privacy",
            icon: <AdminPanelSettingsOutlinedIcon />
          }
    ]
  }
];

'use client'
import { useState } from 'react';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import Groups2Icon from '@mui/icons-material/Groups2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false)

    const DrawerList = (
        <Box sx={{ width: 150 , backgroundColor: "rgb(31, 41, 55)" , color: "whitesmoke" , height: '100vh' }} role="presentation" onClick={() => setOpen(false)}>
            <List>
                {["About", "Projects", "Socials"].map((text, index) => (
                    <ListItemButton key={index}>
                        { index === 0 ? <ListItemIcon><AccountTreeIcon /></ListItemIcon> : (index === 1 ? <ListItemIcon><InfoIcon/></ListItemIcon> : <ListItemIcon><Groups2Icon /></ListItemIcon>)}
                        {index === 0 ? <ListItemText primary="Projects" /> : (index === 1 ? <ListItemText primary="About" /> : <ListItemText primary="Socials" />)}
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <nav className="bg-gray-800 animate-slideDown">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex space-x-4">
                            <h3 className="text-white">Harsh Suthar</h3>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        <div className="block sm:hidden ml-6">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Socials
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block flex-row justify-end">
                        <Button onClick={() => setOpen(true)}>
                            <ArrowBackIosIcon />
                        </Button>
                        <Drawer open={open} onClose={() => setOpen(false)} anchor='right'>
                            {DrawerList}
                        </Drawer>
                    </div>
                </div>
            </div>
        </nav>
    );
}
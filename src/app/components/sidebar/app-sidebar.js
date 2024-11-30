'use client'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Avatar,
  Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  LibraryBooks as CourseManagementIcon,
  CreateNewFolder as CourseCreationIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';

const DRAWER_WIDTH = 240;

const menuItems = [
  { text: 'Management', icon: <CourseManagementIcon />, path: '/course-management' },
  { text: 'Creation', icon: <CourseCreationIcon />, path: '/course-creation' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          bgcolor: 'background.default',
        },
      }}
    >
      {/* Logo/Brand Area */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="h1">
          Synapse AI
        </Typography>
      </Box>
      
      <Divider />

      {/* Navigation Menu */}
      <List sx={{ px: 2 }}> 
        {menuItems.map((item) => (
          <ListItem 
            key={item.text}
            disablePadding
            sx={{
              mb: 1
            }}
          >
            <ListItemButton 
              selected={pathname === item.path}
              onClick={() => router.push(item.path)}
              sx={{
                borderRadius: "8px",
                '&.Mui-selected': {
                  backgroundColor: '#FFD364AA',
                  '&:hover': {
                    backgroundColor: '#FFD364CC', // Slightly darker on hover
                  },
                  // Keep icon and text color dark for better contrast on yellow
                  color: 'text.primary',
                  '& .MuiListItemIcon-root': {
                    color: 'text.primary',
                  },
                },
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* User Profile Section */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          px: 1,
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Avatar sx={{ 
            bgcolor: '#FFD364AA',
            color: 'text.primary'
            }}>
            SS
            </Avatar>
            </ListItemIcon>
            <ListItemText 
              primary="Creator"
              secondary="S Sharma"
            />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
}
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} href="/trades">
          <ListItemText primary="Journal" />
        </ListItem>
        <ListItem button component={Link} href="/analytics">
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button component={Link} href="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
}

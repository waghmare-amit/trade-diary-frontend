import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import TradeForm from './TradeForm';

export default function AddTradeDialog({ open, onClose, onTradeAdded }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Trade</DialogTitle>
      <DialogContent>
        <TradeForm onTradeAdded={onTradeAdded} />
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
}

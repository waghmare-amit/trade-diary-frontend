import React, { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import TradeList from "../components/TradeList";
import AddTradeDialog from "../components/AddTradeDialog";
import axios from "axios";

export default function Trades() {
  const [trades, setTrades] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const refreshTrades = () => {
    axios.get("http://localhost:4000/api/trades").then(res => setTrades(res.data));
  };

  useEffect(() => {
    refreshTrades();
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={4}>All Trades</Typography>
      <Button variant="contained" color="primary" sx={{mt:2}} onClick={()=>setDialogOpen(true)}>Add Trade</Button>
      <AddTradeDialog open={dialogOpen} onClose={()=>setDialogOpen(false)} onTradeAdded={refreshTrades} />
      <TradeList trades={trades} />
    </Container>
  );
}

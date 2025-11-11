import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Button } from "@mui/material";
import DashboardCards from "../components/DashboardCards";
import PnLChart from "../components/PnLChart";
import AddTradeDialog from "../components/AddTradeDialog";

export default function Home() {
  const [trades, setTrades] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/api/trades").then(res => setTrades(res.data));
  }, []);

  // Example stats
  const stats = {
    pnlToday: trades.filter(t=>t.date === new Date().toISOString().slice(0,10)).reduce((sum,t)=>sum+(parseFloat(t.profit_loss)||0),0),
    winRate: trades.length ? Math.round(100 * trades.filter(t=>t.profit_loss > 0).length / trades.length) : 0
  };

  return (
    <Container>
      <Typography variant="h3" mt={4} mb={2}>Trade Diary Dashboard</Typography>
      <DashboardCards stats={stats} />
      <PnLChart data={trades} />
      <Button variant="contained" color="primary" sx={{mt:2}} onClick={()=>setDialogOpen(true)}>Add Trade</Button>
      <AddTradeDialog open={dialogOpen} onClose={()=>setDialogOpen(false)} onTradeAdded={()=>axios.get("http://localhost:4000/api/trades").then(res => setTrades(res.data))} />
    </Container>
  );
}

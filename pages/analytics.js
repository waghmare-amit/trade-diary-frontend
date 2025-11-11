import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import PnLChart from "../components/PnLChart";
import axios from "axios";

export default function Analytics() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/trades").then(res => setTrades(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>Analytics</Typography>
      <PnLChart data={trades} />
      {/* Add more advanced analytics here */}
    </Container>
  );
}

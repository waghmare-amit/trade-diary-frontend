import React, { useState } from "react";
import { TextField, Button, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";

const strategies = ["9-EMA Breakout", "Trend Following", "Mean Reversion"];

export default function TradeForm({ onTradeAdded }) {
  const [trade, setTrade] = useState({
    date: new Date().toISOString().slice(0, 10),
    instrument: "",
    direction: "Long",
    quantity: 1,
    profit_loss: "",
    strategy: "",
    entry_reason: "",
    analysis: "",
    analysis_correct: false,
    missed_opportunities: "",
    notes: "",
    emotion: "",
    tags: "",
    screenshot: ""
  });

  const handleChange = (e) => {
    setTrade({ ...trade, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/trades", trade);
    setTrade({
      ...trade,
      instrument: "",
      profit_loss: "",
      strategy: "",
      entry_reason: "",
      analysis: "",
      analysis_correct: false,
      missed_opportunities: "",
      notes: "",
      emotion: "",
      tags: "",
      screenshot: ""
    });
    if (onTradeAdded) onTradeAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Date" name="date" type="date" value={trade.date} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Instrument" name="instrument" value={trade.instrument} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Quantity" name="quantity" type="number" value={trade.quantity} onChange={handleChange} margin="normal" />
      <TextField label="Profit/Loss" name="profit_loss" type="number" value={trade.profit_loss} onChange={handleChange} margin="normal" />
      <TextField select label="Strategy" name="strategy" value={trade.strategy} onChange={handleChange} fullWidth margin="normal">
        {strategies.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
      </TextField>
      <TextField label="Entry Reason" name="entry_reason" value={trade.entry_reason} onChange={handleChange} fullWidth multiline rows={2} margin="normal" />
      <TextField label="Day Analysis" name="analysis" value={trade.analysis} onChange={handleChange} fullWidth multiline rows={2} margin="normal" />
      <FormControlLabel control={
        <Checkbox checked={trade.analysis_correct} onChange={e => setTrade({ ...trade, analysis_correct: e.target.checked })} />
      } label="Was analysis correct?" />
      <TextField label="Missed Opportunities" name="missed_opportunities" value={trade.missed_opportunities} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Notes" name="notes" value={trade.notes} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Emotion" name="emotion" value={trade.emotion} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Tags" name="tags" value={trade.tags} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Add Trade</Button>
    </form>
  );
}

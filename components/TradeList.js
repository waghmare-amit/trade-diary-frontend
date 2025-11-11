import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function TradeList({ trades }) {
  const columns = [
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'instrument', headerName: 'Instrument', width: 160 },
    { field: 'direction', headerName: 'Direction', width: 80 },
    { field: 'quantity', headerName: 'Qty', width: 70 },
    { field: 'profit_loss', headerName: 'P/L', width: 100, 
      renderCell: (params) => (
        <span style={{ color: params.value >= 0 ? 'green' : 'red' }}>
          {params.value}
        </span>
      ) },
    { field: 'strategy', headerName: 'Strategy', width: 120 },
    { field: 'entry_reason', headerName: 'Entry Reason', width: 160 },
    // ...add other columns as needed
  ];
  return (
    <Box height={400}>
      <DataGrid rows={trades.map((t,i)=>({...t, id:t.id||i}))} columns={columns} pageSize={10} />
    </Box>
  );
}

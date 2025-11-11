import { Card, CardContent, Typography, Grid } from '@mui/material';

export default function DashboardCards({ stats }) {
  return (
    <Grid container spacing={2} mb={2} mt={2}>
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">Today's P&L</Typography>
            <Typography color={stats.pnlToday >= 0 ? 'success.main' : 'error.main'} variant="h4">
              ₹{stats.pnlToday}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">Win Rate</Typography>
            <Typography variant="h4">{stats.winRate}%</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more cards for recent trades, active strategies, etc */}
    </Grid>
  );
}

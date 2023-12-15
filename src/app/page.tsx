'use client';

import { Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';

type AppSetting = {
  name: string;
  value: string;
  slotSetting: boolean;
};

const getConvertedConfig = (data: AppSetting[]) => {
  let processedData = {};
  data.forEach((setting: AppSetting) => {
    Object.assign(processedData, {[setting.name]: setting.value});
  });
  return JSON.stringify(processedData, null, 2);
}

export default function Home() {
  const [config, setConfig] = useState<AppSetting[]>([]);
  return (
    <main style={{ maxHeight: '100vh'}}>
      <Typography variant="h4">Azure Config Converter</Typography>
      <Grid container spacing={2} sx={{my: 2}}>
        <Grid item xs={6}>
          <Typography>Put azure config here</Typography>
          <TextField onChange={(e) => setConfig(JSON.parse(e.target.value))} multiline fullWidth sx={{
            overflowY: 'auto',
          }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Converted config</Typography>
          {config && (
            <div style={{ backgroundColor: 'lightgrey' }}>
                <pre style={{
                  backgroundColor: 'lightgrey',
                  marginTop: 1,
                  padding: '1rem',
                  overflowX: 'auto',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  fontSize: '0.8rem',
                }}>
                    {getConvertedConfig(config)}
                </pre>
            </div>
          )}
        </Grid>
      </Grid>
    </main>
  )
}

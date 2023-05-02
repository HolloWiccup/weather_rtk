import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { useTypedSelector } from '../../hooks/use-typed-selector';

export const Forecast = () => {
  const { forecast, isLoading, error } = useTypedSelector(
    (state) => state.forecast
  );

  return (
    <>
      {!isLoading ? (
        !error && (
          <Box
            padding="0px"
            margin="0px"
            overflow="auto"
            height="100%"
            width="100%"
          >
            <List>
              {forecast.list.map((item, index) => (
                <ListItem key={index}>
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography variant="subtitle2">{item.date}</Typography>
                      <Typography variant="subtitle2">
                        {item.temperature}&deg;C
                      </Typography>
                      <Typography variant="subtitle2">
                        {item.description}
                      </Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography variant="subtitle2">{item.time}</Typography>
                      <Typography variant="subtitle2">
                        {item.feels_like}&deg;C
                      </Typography>

                      <img
                        src={item.icon}
                        alt={item.description}
                        style={{ width: '24px' }}
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Box>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

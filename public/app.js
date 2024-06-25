import twelvedata from "https://unpkg.com/twelvedata@latest/dist-esm/twelvedata.js?module";

// setup the config

const config = {
    key: "5bbf5f70508545f0869a33647aec096f",
  };
  
  // initialize and use the client
  
  const client = twelvedata(config);
  
  // time series
  
  let params = {
    symbol: "AAPL",
    interval: "1min",
    outputsize: 5,
  };
  
  client
    .timeSeries(params)
    .then((data) => {
      // consume array of data
    })
    .catch((error) => {
      // handle error
    });
  
  // earnings
  
  params = {
    symbol: "AAPL",
  };
  
  client
    .earnings(params)
    .then((data) => {
      // use earnings data
    })
    .catch((error) => {
      // handle error
    });
  
  // api usage
  
  client
    .apiUsage()
    .then((data) => {
      console.log(data);
      // {"timestamp":"2020-10-07 03:53:25","current_usage":0,"plan_limit":55}
    })
    .catch((error) => {
      // handle error
    });
  
  // complex data (batched requests)
  
  params = {
    symbols: ["AAPL", "MSFT", "GOOG"],
    intervals: ["5min", "1day"],
    outputsize: 5,
    methods: [
      "time_series",
      {
        name: "ema",
        time_period: 12,
      },
    ],
  };
  
  client
    .complexData(params)
    .then((data) => {
      // consume array of data
    })
    .catch((error) => {
      // handle error
    });
  
  // price
  
  params = {
    symbol: "AAPL",
  };
  
  client
    .price(params)
    .then((data) => {
      console.log(data);
      // {"price":"113.16000"}
    })
    .catch((error) => {
      // handle error
    });
  
  // technical indicators
  
  params = {
    symbol: "AAPL",
    interval: "1min",
    outputsize: 5,
    indicator: "stoch",
  };
  
  client
    .technicalIndicators(params)
    .then((data) => {
      // use technical indicator data
    })
    .catch((error) => {
      // handle error
    });
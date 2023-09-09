// import React, { useEffect, useState } from 'react';
// import FusionCharts from 'fusioncharts';
// import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
// import ReactFC from '../lib/ReactFC';

// ReactFC.fcRoot(FusionCharts, TimeSeries);

// const SimpleTimeSeries = () => {
//   const [timeseriesDs, setTimeseriesDs] = useState({
//     type: 'timeseries',
//     renderAt: 'container',
//     width: '600',
//     height: '400',
//     dataSource: {
//       caption: { text: 'Online Sales of a SuperStore in the US' },
//       data: null,
//       yAxis: [{
//         plot: [{
//           value: 'Sales ($)',
//         }],
//       }],
//     },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dataResponse = await fetch('https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/data.json');
//         const schemaResponse = await fetch('https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/schema.json');
//         const data = await dataResponse.json();
//         const schema = await schemaResponse.json();
        
//         const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
//         const updatedTimeseriesDs = { ...timeseriesDs };
//         updatedTimeseriesDs.dataSource.data = fusionTable;
//         setTimeseriesDs(updatedTimeseriesDs);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // The empty dependency array ensures this effect runs once, similar to componentDidMount

//   return (
//     <div>
//       {timeseriesDs.dataSource.data ? (
//         <ReactFC {...timeseriesDs} />
//       ) : (
//         'loading'
//       )}
//     </div>
//   );
// };

// export default SimpleTimeSeries;

import React from 'react'

const LineGraph = () => {
  return (
    <div>LineGraph</div>
  )
}

export default LineGraph
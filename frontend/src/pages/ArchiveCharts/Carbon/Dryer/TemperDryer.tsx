import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';
import {temperatureParams} from "./configDryer.ts";

const TemperDryer: React.FC = () => {
  const {id} = useParams();

  const datasets: Dataset[] =
    temperatureParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/sushilka${id}`,
      dataKey: 'temperatures',
      params: [{key: keyPrefix, label, unit: '°C'}],
    }))
  ;

  return (
    <DailyChart
      title={`Сушилка №${id}: Температура`}
      stepSize={50}
      yMin={0}
      yMax={600}
      datasets={datasets}
    />
  );
};

export default TemperDryer;

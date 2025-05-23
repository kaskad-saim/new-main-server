import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';
import {temperatureParams} from "./configMpa.ts";

const TemperMpa: React.FC = () => {
  const {id} = useParams();

  const datasets: Dataset[] =
    temperatureParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/mpa${id}`,
      dataKey: 'temperatures',
      params: [{key: `${keyPrefix}${id}`, label, unit: '°C'}],
    }))
  ;

  return (
    <DailyChart
      title={`МПА №${id}: Температура`}
      stepSize={50}
      yMin={0}
      yMax={1200}
      datasets={datasets}
    />
  );
};

export default TemperMpa;

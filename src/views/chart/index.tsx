import { Outlet } from 'react-router-dom';

function Chart() {
  return (
    <h1>
      Chart
      <Outlet />
    </h1>
  );
}

export default Chart;

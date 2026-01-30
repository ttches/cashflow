import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph14 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#E8E2F4] mb-2">14 - Dense Grid</h3>
      <p className="text-sm text-[#6B6483] mb-2">Full grid lines, traditional chart look</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="linear"
          enableArea={false}
          pointSize={6}
          pointColor="#1E1A2E"
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          lineWidth={2}
          useMesh={true}
          enableSlices="x"
          gridYValues={5}
          theme={{
            background: '#1E1A2E',
            text: { fill: '#A9A1C1' },
            grid: { line: { stroke: '#3D3554', strokeWidth: 1 } },
            axis: {
              ticks: { text: { fill: '#A9A1C1' }, line: { stroke: '#3D3554' } },
              legend: { text: { fill: '#A9A1C1' } },
              domain: { line: { stroke: '#A9A1C1' } },
            },
            crosshair: { line: { stroke: '#C792EA' } },
            tooltip: { container: { background: '#171421', color: '#A9A1C1' } },
          }}
          colors={['#F07178', '#C3E88D']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#A9A1C1',
              symbolSize: 12,
              symbolShape: 'square',
            },
          ]}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Amount ($)',
            legendOffset: -50,
            legendPosition: 'middle',
            format: (v) => `${Number(v) / 1000}k`,
          }}
        />
      </div>
    </div>
  )
}

export default Graph14

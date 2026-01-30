import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph13 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#E8E2F4] mb-2">13 - Cool Cyan</h3>
      <p className="text-sm text-[#6B6483] mb-2">Cyan and purple scheme, subtle area</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="monotoneX"
          enableArea={true}
          areaOpacity={0.15}
          pointSize={4}
          pointColor={{ from: 'color' }}
          lineWidth={2}
          useMesh={true}
          enableSlices="x"
          enableGridX={false}
          theme={{
            background: '#1E1A2E',
            text: { fill: '#89DDFF' },
            grid: { line: { stroke: '#3D3554' } },
            axis: {
              ticks: { text: { fill: '#89DDFF' } },
              legend: { text: { fill: '#89DDFF' } },
            },
            crosshair: { line: { stroke: '#89DDFF' } },
            tooltip: { container: { background: '#171421', color: '#89DDFF' } },
          }}
          colors={['#C792EA', '#89DDFF']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#89DDFF',
              symbolSize: 12,
              symbolShape: 'circle',
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

export default Graph13

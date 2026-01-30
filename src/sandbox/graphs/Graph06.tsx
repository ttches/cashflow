import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph06 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#E8E2F4] mb-2">06 - Neon Glow</h3>
      <p className="text-sm text-[#6B6483] mb-2">Bright colors on dark, thick lines</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="natural"
          enableArea={false}
          pointSize={0}
          lineWidth={3}
          useMesh={true}
          enableSlices="x"
          enableGridX={false}
          enableGridY={false}
          theme={{
            background: '#171421',
            text: { fill: '#A9A1C1' },
            axis: {
              ticks: { text: { fill: '#6B6483' } },
              legend: { text: { fill: '#A9A1C1' } },
              domain: { line: { stroke: '#3D3554' } },
            },
            crosshair: { line: { stroke: '#89DDFF', strokeWidth: 2 } },
            tooltip: { container: { background: '#1E1A2E', color: '#89DDFF' } },
          }}
          colors={['#F07178', '#89DDFF']}
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
            tickSize: 0,
            tickPadding: 10,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 10,
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

export default Graph06

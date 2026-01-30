import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph17 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#E8E2F4] mb-2">17 - Sparkline Style</h3>
      <p className="text-sm text-[#6B6483] mb-2">Minimal axes, focus on the data</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 30, left: 40 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="monotoneX"
          enableArea={true}
          areaOpacity={0.1}
          pointSize={0}
          lineWidth={2}
          useMesh={true}
          enableSlices="x"
          enableGridX={false}
          enableGridY={false}
          theme={{
            background: '#1E1A2E',
            text: { fill: '#A9A1C1' },
            axis: {
              ticks: { text: { fill: '#6B6483', fontSize: 10 } },
            },
            crosshair: { line: { stroke: '#C792EA' } },
            tooltip: { container: { background: '#171421', color: '#A9A1C1', fontSize: 12 } },
          }}
          colors={['#C792EA', '#89DDFF']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 16,
              itemTextColor: '#A9A1C1',
              symbolSize: 8,
              symbolShape: 'circle',
            },
          ]}
          axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickValues: 5,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickValues: 3,
            format: (v) => `${Number(v) / 1000}k`,
          }}
        />
      </div>
    </div>
  )
}

export default Graph17

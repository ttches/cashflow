import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph06 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#A599E9] mb-2">06 - Neon Glow</h3>
      <p className="text-sm text-[#6E6E9E] mb-2">Bright colors on dark, thick lines</p>
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
            background: '#1E1E3F',
            text: { fill: '#A599E9' },
            axis: {
              ticks: { text: { fill: '#6E6E9E' } },
              legend: { text: { fill: '#A599E9' } },
              domain: { line: { stroke: '#3B3B6E' } },
            },
            crosshair: { line: { stroke: '#9EFFFF', strokeWidth: 2 } },
            tooltip: { container: { background: '#2D2B55', color: '#9EFFFF' } },
          }}
          colors={['#FF2C70', '#9EFFFF']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#9EFFFF',
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

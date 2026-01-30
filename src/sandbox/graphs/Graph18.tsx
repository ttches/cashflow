import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph18 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#E8E2F4] mb-2">18 - Retro Terminal</h3>
      <p className="text-sm text-[#6B6483] mb-2">Green on dark, monochrome feel</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="linear"
          enableArea={false}
          pointSize={6}
          pointColor="#171421"
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          lineWidth={2}
          useMesh={true}
          enableSlices="x"
          theme={{
            background: '#171421',
            text: { fill: '#C3E88D' },
            grid: { line: { stroke: '#C3E88D', strokeOpacity: 0.2 } },
            axis: {
              ticks: { text: { fill: '#C3E88D' } },
              legend: { text: { fill: '#C3E88D' } },
              domain: { line: { stroke: '#C3E88D', strokeOpacity: 0.5 } },
            },
            crosshair: { line: { stroke: '#C3E88D' } },
            tooltip: { container: { background: '#171421', color: '#C3E88D', border: '1px solid #C3E88D' } },
          }}
          colors={['#C3E88D', '#89DDFF']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#C3E88D',
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

export default Graph18

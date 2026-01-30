import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph15 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#E8E2F4] mb-2">15 - Soft Pastels</h3>
      <p className="text-sm text-[#6B6483] mb-2">Muted colors, gentle curves</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="natural"
          enableArea={true}
          areaOpacity={0.25}
          pointSize={0}
          lineWidth={3}
          useMesh={true}
          enableSlices="x"
          enableGridX={false}
          theme={{
            background: '#1E1A2E',
            text: { fill: '#A9A1C1' },
            grid: { line: { stroke: '#3D3554', strokeOpacity: 0.4 } },
            axis: {
              ticks: { text: { fill: '#6B6483' } },
              legend: { text: { fill: '#A9A1C1' } },
            },
            crosshair: { line: { stroke: '#A9A1C1', strokeOpacity: 0.5 } },
            tooltip: { container: { background: '#171421', color: '#A9A1C1' } },
          }}
          colors={['#A9A1C1', '#6B6483']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#A9A1C1',
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

export default Graph15

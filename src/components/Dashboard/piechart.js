
import { PieChart, Pie, Cell,Legend } from "recharts";

const data = [
  { name: "WooCommerce Store", value: 55.8 },
  { name: "Shopify Store", value: 44.2 },
  
];

const COLORS = ["#f97d7d", "#28dcd1"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100)}%`}
    </text>
  );
};
const SalespieChart=()=> {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={160}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text x="50%" y="50%" dy={10} textAnchor="middle" fill="#000" fontSize={18} >
        Total: 2659
      </text>
      <Legend 
          verticalAlign="bottom"
          align="center"
          layout="horizontal"
          iconType="circle"   
          iconSize={10}    
          formatter={(value) => <span style={{ fontSize: '12px' }}>{value}</span>}    
          wrapperStyle={{ paddingTop: 30 }}
        />
    </PieChart>
  );
}

export default SalespieChart
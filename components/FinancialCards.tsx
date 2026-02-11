
import React from 'react';
import { DollarSign, CreditCard, PieChart as PieIcon, TrendingUp, Shield } from 'lucide-react';

interface FinanceCardProps {
  label: string;
  value: string;
  subtitle: string;
  icon: 'money' | 'card' | 'chart' | 'trend' | 'shield';
  color?: string;
}

export const FinanceCard: React.FC<FinanceCardProps> = ({ label, value, subtitle, icon, color = '#0B5D3B' }) => {
  const IconMap = {
    money: DollarSign,
    card: CreditCard,
    chart: PieIcon,
    trend: TrendingUp,
    shield: Shield
  };
  
  // Use fallback to prevent Error 130 if 'icon' doesn't match a key in IconMap
  const IconComp = IconMap[icon] || DollarSign;

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg bg-opacity-10`} style={{ backgroundColor: `${color}1A` }}>
          <IconComp size={24} style={{ color }} />
        </div>
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active</div>
      </div>
      <div>
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">{label}</h4>
        <p className="text-2xl font-bold text-gray-900 leading-none mb-1">{value}</p>
        <p className="text-[10px] text-gray-400 font-medium italic">{subtitle}</p>
      </div>
    </div>
  );
};

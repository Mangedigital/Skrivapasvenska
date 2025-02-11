import React from 'react';
import type { JobCategory } from '../App';
import { Brush, Flower2, Baby, Heart, Store } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const CategoryCard = ({ icon, title, description, onClick }: CategoryCardProps) => (
  <button
    onClick={onClick}
    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 text-left w-full group"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </button>
);

interface CategorySelectionProps {
  onSelect: (category: JobCategory) => void;
}

export default function CategorySelection({ onSelect }: CategorySelectionProps) {
  const categories = [
    {
      id: 'cleaning' as JobCategory,
      icon: <Brush className="w-6 h-6" />,
      title: 'Lokalvård',
      description: 'Öva på texter relaterade till städning och lokalvård'
    },
    {
      id: 'gardening' as JobCategory,
      icon: <Flower2 className="w-6 h-6" />,
      title: 'Park/trädgård',
      description: 'Texter om trädgårdsskötsel och parkarbete'
    },
    {
      id: 'childcare' as JobCategory,
      icon: <Baby className="w-6 h-6" />,
      title: 'Barnomsorg',
      description: 'Texter anpassade för arbete inom förskolan'
    },
    {
      id: 'healthcare' as JobCategory,
      icon: <Heart className="w-6 h-6" />,
      title: 'Vård och omsorg',
      description: 'Öva på vårdrelaterade texter och terminologi'
    },
    {
      id: 'retail' as JobCategory,
      icon: <Store className="w-6 h-6" />,
      title: 'Butik och service',
      description: 'Texter för arbete inom butik och kundservice'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
          Välj yrkeskategori
        </h1>
        <p className="text-gray-600">
          Välj den kategori du vill öva på för att få relevanta texter för ditt yrke
        </p>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            title={category.title}
            description={category.description}
            onClick={() => onSelect(category.id)}
          />
        ))}
      </div>
    </div>
  );
}
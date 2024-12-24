import React, { createContext, useState, useContext, ReactNode } from 'react';

// Описание типов для состояния фильтра
type PriceFilter = {
  min: number;
  max: number;
};

type FilterState = {
  price: string | null;    // Диапазон цены
  startDate: string | null; // Дата начала в формате 'YYYY-MM-DD' или null
  endDate: string | null;   // Дата конца в формате 'YYYY-MM-DD' или null
};

// Тип для функции обновления фильтра
type FilterContextType = {
  filter: FilterState;
  updateFilter: (key: keyof FilterState, value: any) => void;
};

// Начальное состояние фильтра
const defaultFilter: FilterState = {
  price: null,
  startDate: null,
  endDate: null,
};

// Создаем контекст с типизацией
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Провайдер контекста
type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<FilterState>(defaultFilter);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <FilterContext.Provider value={{ filter, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

// Хук для использования контекста
export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter должен использоваться внутри FilterProvider');
  }
  return context;
};

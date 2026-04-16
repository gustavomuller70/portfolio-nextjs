// src/components/ui/SectionTitle.tsx
import React from 'react';

interface SectionTitleProps {
    title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        // Esta es la clase exacta que usa tu título de "Últimos Proyectos"
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-emerald-500 rounded-full" /> {/* La rayita verde decorativa */}
            {title}
        </h2>
    );
};
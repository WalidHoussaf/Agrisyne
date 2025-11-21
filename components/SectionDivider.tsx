'use client';

interface SectionDividerProps {
  variant?: 'green-gradient' | 'blue-gradient';
  className?: string;
}

export default function SectionDivider({ variant = 'green-gradient', className = '' }: SectionDividerProps) {
  const baseClasses = "relative w-full h-px";
  
  const dividerStyles = {
    'green-gradient': (
      <div className={`${baseClasses} ${className}`}>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-picture-book-green/30 to-transparent"></div>
      </div>
    ),

    'blue-gradient': (
      <div className={`${baseClasses} ${className}`}>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-nuit-blanche to-transparent"></div>
      </div>
    )
  };

  return dividerStyles[variant];
}

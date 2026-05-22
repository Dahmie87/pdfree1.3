type PatternBackdropProps = {
  className?: string;
  tone?: 'light' | 'dark';
};

const dotStyles = {
  light: {
    outward: {
      backgroundImage: [
        'radial-gradient(circle, rgba(30, 41, 59, 0.4) 3.2px, transparent 3.6px)',
        'radial-gradient(circle, rgba(51, 65, 85, 0.32) 2.6px, transparent 3px)',
        'radial-gradient(circle, rgba(71, 85, 105, 0.24) 1.8px, transparent 2.1px)',
      ].join(', '),
      backgroundSize: '28px 28px, 44px 44px, 64px 64px',
      backgroundPosition: '0 0, 0 0, 0 0',
      backgroundRepeat: 'repeat',
      maskImage: 'radial-gradient(ellipse 150% 80% at 50% 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 15%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0) 55%)',
      WebkitMaskImage: 'radial-gradient(ellipse 150% 80% at 50% 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 15%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0) 55%)',
    },
  },
  dark: {
    outward: {
      backgroundImage: [
        'radial-gradient(circle, rgba(203, 213, 225, 0.42) 3.2px, transparent 3.6px)',
        'radial-gradient(circle, rgba(226, 232, 240, 0.34) 2.6px, transparent 3px)',
        'radial-gradient(circle, rgba(241, 245, 249, 0.26) 1.8px, transparent 2.1px)',
      ].join(', '),
      backgroundSize: '28px 28px, 44px 44px, 64px 64px',
      backgroundPosition: '0 0, 0 0, 0 0',
      backgroundRepeat: 'repeat',
      maskImage: 'radial-gradient(ellipse 150% 80% at 50% 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 15%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0) 55%)',
      WebkitMaskImage: 'radial-gradient(ellipse 150% 80% at 50% 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 15%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0) 55%)',
    },
  },
} as const;

const PatternBackdrop = ({ className = '', tone = 'light' }: PatternBackdropProps) => {
  const pattern = dotStyles[tone];

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={pattern.outward}
      />
    </div>
  );
};

export default PatternBackdrop;

export default function Logo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Figure floating above its shadow — dissociation */}
      <circle cx="20" cy="13" r="6" stroke="var(--color-accent, #9090b0)" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d="M12 28 Q20 22 28 28" stroke="var(--color-accent, #9090b0)" strokeWidth="1.5" fill="none" opacity="0.8"/>
      {/* Shadow / echo below */}
      <ellipse cx="20" cy="35" rx="8" ry="2" stroke="var(--color-accent, #9090b0)" strokeWidth="1" fill="none" opacity="0.2"/>
    </svg>
  )
}

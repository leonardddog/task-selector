interface SwitchProps {
  checked: boolean
  label: string
  activeColor: string
  onChange: (checked: boolean) => void
}

export default function Switch({ checked, label, activeColor, onChange }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="relative h-[16px] w-[32px] shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b71d3] focus-visible:ring-offset-1"
      style={{ backgroundColor: checked ? activeColor : '#c9ced4' }}
    >
      <span
        className={`absolute top-[2px] size-[12px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition-transform ${
          checked ? 'translate-x-[18px]' : 'translate-x-[2px]'
        }`}
      />
    </button>
  )
}

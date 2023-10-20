import { LucideProps, Loader2 } from 'lucide-react'

export const Icons = {
  CutterOff: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 2000 2000">
      <path
        fill="currentColor"
        d="m20.84 22.73l-7.98-7.98l-.69.69l-5.51-2.36c.05-.43.23-.84.56-1.17l1.4-1.41L1.11 3l1.28-1.27l19.72 19.73l-1.27 1.27m-5.43-10.52l-4.25-4.25l5.25-5.25c.79-.78 2.05-.78 2.83 0l1.42 1.42c.78.78.78 2.04 0 2.83l-5.25 5.25m1.71-5.96c.38.39 1.03.39 1.42 0c.39-.39.39-1.02 0-1.42c-.39-.39-1.04-.39-1.42 0c-.39.4-.39 1.03 0 1.42M5 16v5.75l5.81-5.22l-5-2L5 16Z"
      />
    </svg>
  ),
  Loader2,
}

export type Icon = keyof typeof Icons

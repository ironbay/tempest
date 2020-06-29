import * as React from "react"

export function IconCancel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12.021 22.438c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        fill="currentColor"
      />
      <path
        d="M15.021 9.438l-6 6M9.021 9.438l6 6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} viewBox="0 0 18 13" fill="none" {...props}>
      <path
        d="M16 2l-9.625 9.625L2 7.25"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )
}

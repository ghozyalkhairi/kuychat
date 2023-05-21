import { FC } from "react"

export interface Props {
  width?: number
  height?: number
}

const BackIcon: FC<Props> = ({ width = 50, height = 50 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 84 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.2268 0.848747C65.2268 0.848747 83.8935 19.5154 83.8935 42.5154C83.8935 65.5154 65.2268 84.1821 42.2268 84.1821C19.2268 84.1821 0.560134 65.5154 0.560134 42.5154C0.560134 19.5154 19.2268 0.848747 42.2268 0.848747ZM42.2268 38.3487V25.8487L25.5601 42.5154L42.2268 59.1821V46.6821H58.8935V38.3487H42.2268Z"
        fill="#FFD953"
      />
    </svg>
  )
}

export default BackIcon

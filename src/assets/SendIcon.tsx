import { FC } from "react"

export interface Props {
  width?: number
  height?: number
}

const SendIcon: FC<Props> = ({ width = 46, height = 51 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.25 28.1509H14.3293V23.4578H0.25V1.97743C0.250035 1.77355 0.303197 1.57319 0.404247 1.39612C0.505297 1.21904 0.650746 1.07135 0.826259 0.967605C1.00177 0.863861 1.20129 0.807643 1.40515 0.804492C1.609 0.801341 1.81016 0.851367 1.9888 0.949637L45.3109 24.7766C45.4949 24.8778 45.6483 25.0266 45.7551 25.2074C45.8619 25.3882 45.9183 25.5944 45.9183 25.8044C45.9183 26.0143 45.8619 26.2205 45.7551 26.4013C45.6483 26.5821 45.4949 26.7309 45.3109 26.8321L1.9888 50.6591C1.81016 50.7573 1.609 50.8074 1.40515 50.8042C1.20129 50.8011 1.00177 50.7448 0.826259 50.6411C0.650746 50.5374 0.505297 50.3897 0.404247 50.2126C0.303197 50.0355 0.250035 49.8352 0.25 49.6313V28.1509Z"
        fill="#FFD953"
      />
    </svg>
  )
}

export default SendIcon
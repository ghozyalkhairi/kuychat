import { FC } from "react"

export interface Props {
  width?: number
  height?: number
}

const ProfileIcon: FC<Props> = ({ width = 50, height = 50 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25C0 11.2 11.2 0 25 0ZM10.0575 33.54C13.7275 39.015 19.2375 42.5 25.4 42.5C31.56 42.5 37.0725 39.0175 40.74 33.54C36.5793 29.6515 31.0949 27.492 25.4 27.5C19.7043 27.4914 14.2188 29.6509 10.0575 33.54ZM25 22.5C26.9891 22.5 28.8968 21.7098 30.3033 20.3033C31.7098 18.8968 32.5 16.9891 32.5 15C32.5 13.0109 31.7098 11.1032 30.3033 9.6967C28.8968 8.29018 26.9891 7.5 25 7.5C23.0109 7.5 21.1032 8.29018 19.6967 9.6967C18.2902 11.1032 17.5 13.0109 17.5 15C17.5 16.9891 18.2902 18.8968 19.6967 20.3033C21.1032 21.7098 23.0109 22.5 25 22.5Z"
        fill="#FFD953"
      />
    </svg>
  )
}

export default ProfileIcon

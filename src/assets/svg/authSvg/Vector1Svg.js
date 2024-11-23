import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={152}
    height={173}
    fill="none"
    {...props}
  >
    <Path
      fill="#0F853B"
      fillRule="evenodd"
      d="M8.427 162.378c-23.576-12.248-24.19-43.779-37.24-66.869-12.767-22.586-38.962-39.096-37.264-64.942 1.898-28.905 20.253-56.57 46.108-69.75 25.043-12.766 53.628-1.303 81.09 4.907 29.304 6.627 63.957 6.793 80.704 31.68 17.25 25.636 8.932 59.344.506 89.006-8.264 29.088-20.388 58.778-46.738 73.727-26.24 14.888-60.35 16.172-87.166 2.241Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent

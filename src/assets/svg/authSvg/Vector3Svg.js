import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={211}
    height={271}
    fill="none"
    {...props}
  >
    <Path
      fill="#0F853B"
      fillRule="evenodd"
      d="M-45.843 91.598c15.376-28.963 54.298-29.372 82.939-45.226C65.113 30.865 85.778-1.282 117.658 1.098c35.654 2.66 69.595 25.62 85.577 57.675 15.48 31.048 1.017 66.202-6.95 100.026-8.502 36.095-9.089 78.862-39.99 99.257-31.829 21.007-73.34 10.369-109.855-.358-35.81-10.52-72.32-25.81-90.48-58.496-18.084-32.55-19.292-74.662-1.803-107.604Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent

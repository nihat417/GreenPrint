import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ color = "#8B8B94", ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.3 13.918H6.564"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 19H6a5 5 0 0 1-5-5V9.2a5 5 0 0 1 1.877-3.904l4-3.2a5 5 0 0 1 6.247 0l4 3.2A5 5 0 0 1 19 9.2V14a5 5 0 0 1-5 5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
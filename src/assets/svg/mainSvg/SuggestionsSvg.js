import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#0F853B"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-urgent"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 16v-4a4 4 0 0 1 8 0v4M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7M6 17a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
  </Svg>
)
export default SvgComponent

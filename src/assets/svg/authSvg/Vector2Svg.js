import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={253}
    fill="none"
    {...props}
  >
    <Path
      fill="#0F853B"
      fillRule="evenodd"
      d="M201.297 8.822c27.177 21.384-3.09 66.027 4.775 99.71 8.384 35.906 55.335 63.872 41.395 98.016-13.928 34.111-61.749 35.104-98.123 40.922-34.214 5.473-70.537 9.631-99.547-9.303C20.668 219.154-.388 185.306.824 150.532c1.08-30.968 34.387-47.332 54.498-70.91 15.94-18.688 27.27-40.144 49.368-50.862 30.759-14.918 69.75-41.07 96.607-19.938Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent

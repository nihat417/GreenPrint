import {Text, View, Image, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import { styled } from "nativewind";

//auth
import Vector1Svg from "../assets/svg/authSvg/Vector1Svg";
import Vector2Svg from "../assets/svg/authSvg/Vector2Svg";
import Vector3Svg from "../assets/svg/authSvg/Vector3Svg";
import EyeOffSvg from "../assets/svg/authSvg/EyeOffSvg";
import EyeOnSvg from "../assets/svg/authSvg/EyeOnSvg";


//main
import TabHomeSvg from "../assets/svg/mainSvg/TabHomeSvg";
import TabProfileSvg from "../assets/svg/mainSvg/TabProfileSvg";
import LeftArrowSvg from "../assets/svg/mainSvg/LeftArrowSvg";
import DontSeeElm from "../assets/svg/mainSvg/DontSeeElm";
import EmitionHistory from "../assets/svg/mainSvg/EmitionHistory";
import ExitSvg from "../assets/svg/mainSvg/ExitSvg";
import SuggestionsSvg from "../assets/svg/mainSvg/SuggestionsSvg";




export const StyledView = styled(View);
export const StyledText = styled(Text);
export const StyledInput = styled(TextInput);
export const StyledButton = styled(TouchableOpacity);
export const StyledScrollView = styled(ScrollView);
export const StyledImage = styled(Image);

export{
    Vector1Svg,Vector2Svg,Vector3Svg,EyeOnSvg,SuggestionsSvg,EyeOffSvg,TabProfileSvg,TabHomeSvg,LeftArrowSvg,DontSeeElm,ExitSvg,EmitionHistory
}
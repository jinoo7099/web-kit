import styled from "styled-components";
import { FaAirbnb, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { ReactComponent as RightButtonSVG } from "../../../assets/icons/next.svg";
import { ReactComponent as LeftButtonSVG } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/instargram.svg";
import { ReactComponent as Category } from "../../../assets/icons/category.svg";
import { ReactComponent as Glass } from "../../../assets/icons/glass.svg";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as User } from "../../../assets/icons/user.svg";
import { ReactComponent as GlobeIcon } from "../../../assets/icons/globe.svg";

export const NextSvg = styled(RightButtonSVG)`
  width: 10px;
`;

export const PreviousSVG = styled(LeftButtonSVG)`
  width: 10px;
`;

export const FacebookSVG = styled(Facebook)`
  width: 10px;
  margin: 0 20px;
`;
export const TwitterSVG = styled(Twitter)`
  width: 10px;
  margin: 0 20px;
`;

export const InstargramSVG = styled(Instagram)`
  width: 10px;
  margin: 0 20px;
`;

export const CategorySVG = styled(Category)``;

export const LogoSVG = styled(FaAirbnb)`
  position: relative;
  top: 10px;
  font-size: 45px;
`;

export const SearchSVG = styled(FaSearch)``;

export const MenuSVG = styled(FiMenu)``;

export const PersonSVG = styled(BsFillPersonFill)``;

export const GlassSVG = styled(Glass)``;

export const HeartSVG = styled(Heart)``;

export const UserSVG = styled(User)``;

export const GlobeSVG = styled(GlobeIcon)`
  width: 21px;
  height: 21px;
`;

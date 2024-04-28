import styled from "styled-components";
import colors from '../theme/colors';

export const Main = styled.main`
  flex-direction: column;
  display: flex;
  background-color: #FFF7EC;
  padding: 12px;
`

export const Spacer = styled.div`
  width: 20px;
  height: 20px;
  `
  export const Progress = styled.progress`
    width: 100%;
    height: 30px;
  `



export const Title = styled.h1`
  font-size: 32px;
  line-height: 32px;
  color: #142B74;
  font-family: 'Mundial';
  font-weight: 500;
  margin: 0px;
`;

export const Label = styled.span`
  font-size: 24px;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #2A3D7799;
  font-family: 'Mundial';
  font-weight: 400;
`;



export const CircleBt = styled.div`
  border: none;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 50px;
  height: 50px;
  background: #f6f6f6;
  cursor: pointer;
  transition: .2s linear;
  color: ${colors.primary};
  &:hover {
    background-color: #262626;
    color: #fff;
    transform: scale(0.9);
  }
 
`


export const OutBt = styled.div`
  border: 2px solid ${colors.primary}40;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  align-content: center;
  text-align: center;
  cursor: pointer;
  font-family: Mundial;
  font-size: 18px;
  transition: .2s linear;
  color: ${colors.primary};
  &:hover {
    background-color: ${colors.primary};
    color: #fff;
    transform: scale(0.9);
  }
 
`


export const PinBt = styled.div`
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  align-content: center;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  font-family: Mundial;
  font-size: 18px;
  transition: .2s linear;
  color: ${colors.primary};
  &:hover {
    background-color: ${colors.secundary};
    color: #fff;
    transform: scale(0.9);
  }
 
`


export const Error = styled.div`
  font-size: ${props => props.theme.size.label};
  color: ${props => props.theme.color.red};
  background-color: #541d1d;
  font-family: 'Book';
  padding: 8px;
  cursor: not-allowed;
  border-radius: 6px;
  margin-top: 10px;
`;
export const B = styled.span`
  font-family: 'Bold';
`
export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #00000000;
`;


export const ButtonPrimary = styled.button`
  border: none;
  padding: 8px 20px; 
  border-radius: 100px; 
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.title};
  transition: .2s linear;
  font-family: 'Medium';
  font-size: 18px;
  cursor: pointer;
  &:hover {
  background-color: ${props => props.theme.color.poff};
  color:  ${props => props.theme.color.label};
  }
`;

export const ButtonLight = styled.button`
  border: none;
  padding: 8px 20px; 
  border-radius: 100px; 
  background-color: #fff;
  color: ${colors.primary};
  transition: .2s linear;
  font-family: 'Mundial';
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: linear .2s;
  &:hover {
    background-color: ${colors.secundary};
    color: #fff;
    transform: scale(0.9);
  }
`;


export const ButtonOff = styled.button`
  border: none;
  padding: 8px 20px; 
  font-family: 'Medium';
  font-size: 18px;
  border-radius: 100px; 
  color: ${props => props.theme.color.title};
  background-color: ${props => props.theme.color.off2};
  transition: .2s linear;
  cursor: pointer;
  &:hover {
  background-color: #000;
  color: ${props => props.theme.color.title};
  }
`;


export const BTIcon = styled.button`
  border: none;
  padding: 12px 20px 10px 24px; 
  font-family: 'Medium';
  font-size: 28px;
  border-radius: 6px; 
  color: ${props => props.theme.color.label+98};
  background-color: #00000000;
  transition: .2s linear;
  align-self: center;
  cursor: pointer;
  &:hover {
  color: ${props => props.theme.color.title};
  }
`;

export const BTColection = styled.button`
  font-family: 'Medium';
  font-size: 24px;
  border: none;
  width: 54px;
  height: 50px;
  margin: 10px 10px 10px 10px;
  z-index: 99;
  border-radius: 6px; 
  color: ${props => props.theme.color.label};
  transition: .2s linear;
  cursor: pointer;
  &:hover {
  }
`;

export const BTColectionLarge = styled.button`
  font-family: 'Medium';
  font-size: 52px;
  margin-bottom: 10px;
  border: none;
  width: 124px;
  height: 120px;
  border-radius: 6px; 
  color: ${props => props.theme.color.label};
  transition: .2s linear;
  cursor: pointer;
  &:hover {
  }
`;


export const BTSelect = styled.button`
  border: 2px solid ${props => props.$active ? '#ffffff00' : "#404040"} ;
  border-radius: 8px;
  margin: 10px 10px 0 0;
  transition: .2s linear;
  cursor: pointer;
  width: 240px;
  height: 100px;
  padding: 10px 20px;
  text-align: left;
  background-color: ${props => props.$active ? props.theme.color.primary : "#ffffff00"};
`;





export const BTLike = styled.button`
  font-family: 'Medium';
  font-size: 18px;
  padding: 6px 20px;
  border: ${props => props.liked ? 'none': '3px solid #f7f7f790'}; 
  background:  ${props => props.liked ? '#FFFFFF': 'transparent'};
  color: ${props => props.liked ? props.theme.color.primary : props.theme.color.label};
  border-radius: 100px; 
  transition: .2s linear;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.color.title};
    border: 3px solid #fff;
  }
`;


export const BTFlow = styled.button`
  font-family: 'Medium';
  font-size: 18px;
  border-radius: 100px; 
  padding: 6px 20px;
  border: ${props => props.notify ? '2px solid' + props.theme.color.primary : '3px solid #f7f7f790'}; 
  background: none;
  color: ${props => props.notify ? props.theme.color.primary : props.theme.color.label};
  transition: .2s linear;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.color.title};
    border: 3px solid #fff;
  }
`;


export const Row = styled.div`
  flex-direction: row;
  display: flex;
`


export const Column = styled.div`
  flex-direction: column;
  display: flex;
`



export const TextInput = styled.input`
  font-size: 32px;
  color: #142B74;
  font-family: 'Book';
  background-color: #303030;
  border: 0.6px solid #404040;
  border-radius: 6px;
  margin-top: 10px;
  outline: none;
  z-index: 2;
  padding: 8px 10px;
  transition: .2s linear;
  &:focus {
    
  border: 0.6px solid ${props => props.theme.color.primary};
  }
`;

export const SubInput = styled.span`
  font-size: 18px;
  color: ${props => props.theme.color.title};
  margin-bottom: -20px;
  margin-top: 20px;
  background-color: #505050;
  border-radius: 4px;
  padding: 8px 14px 16px 14px;
  align-self: flex-start;
`
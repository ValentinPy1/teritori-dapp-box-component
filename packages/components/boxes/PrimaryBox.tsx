import React, { ReactNode } from "react";
import { View, ViewStyle, StyleProp } from "react-native";

export interface PrimaryBoxProps {
  children?: ReactNode;
  squaresBackgroundColor?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  mainContainerStyle?: StyleProp<ViewStyle>;
  noBrokenCorners?: boolean;
  colors?: string[];
  noRightBrokenBorder?: boolean;
}

export const PrimaryBox: React.FC<PrimaryBoxProps> = ({
  squaresBackgroundColor = "#000000",
  disabled = false,
  style,
  mainContainerStyle,
  children,
}) => {

  const h = 90;
  const w = 1090;
  const r = 30;
  const boxpath = `M 0 ${h - r} C 0 ${h} 0 ${h} ${r} ${h} L ${w - r} ${h} C ${w} ${h} ${w} ${h} ${w} ${h - r} L ${w} ${r} C ${w} 0 ${w} 0 ${w - r} 0 L ${r} 0 L 0 ${r} Z`;

  return (
    <View style={{ ...style, flex: 0.61 }}>
      <View style={{ position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100%" }}>
        {children}
      </View>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path d={boxpath} stroke="url(#gradient)" strokeWidth="3" fill="#181818" />
        <defs>
          <linearGradient y2="0" x2="1" y1="0" x1="0" id="gradient">
            <stop offset="0" stopColor="#01B7C5" />
            <stop offset="1" stopColor="#782C96" />
          </linearGradient>
        </defs>
      </svg>
    </View>
  );
}

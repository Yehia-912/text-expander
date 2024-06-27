import { useState } from "react";

interface Props {
  wordsNum?: number;
  showTxt?: string;
  hideTxt?: string;
  showHideColor?: string;
  className?: string;
  expand?: boolean;
  children: string;
}
export default function TextExpander({
  wordsNum = 25,
  showTxt = "Show More",
  hideTxt = "Show Less",
  showHideColor = "blue",
  className = "",
  expand = false,
  children,
}: Props) {
  const [isExpand, setIsExpand] = useState(expand);
  const toggleButtonStyle = {
    color: showHideColor,
    cursor: "pointer",
  };
  const wordsArray = children?.split(" ");
  const limitedWordsArray = wordsArray.filter(
    (_, index) => index + 1 <= wordsNum
  );

  return (
    <div className={"container " + className}>
      {isExpand ? wordsArray.join(" ") : limitedWordsArray.join(" ") + "... "}
      <span
        role="button"
        className="toggler"
        style={toggleButtonStyle}
        onClick={() => setIsExpand((b) => !b)}
      >
        {isExpand ? " " + hideTxt : showTxt}
      </span>
    </div>
  );
}

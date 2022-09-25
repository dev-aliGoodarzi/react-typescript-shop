// React
import React, { useState } from "react";
import { I_HeaderLinks } from "../../Models/Models";
// React
// CSS
import styles from "./Header.module.css";
// CSS
// Images
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import Links from "./Links/Links";

type HeaderProps = {
  setIsSearchActived: Function;
  setSearchData: Function;
};

const Header: React.FunctionComponent<HeaderProps> = ({
  setIsSearchActived,
  setSearchData,
}) => {
  const links: I_HeaderLinks[] = [
    {
      to: "/news",
      nameForDisplay: "News",
      isSelected: true,
    },
    {
      to: "/jobs",
      nameForDisplay: "Jobs",
      isSelected: false,
    },
    {
      to: "/sign-in",
      nameForDisplay: "Sign in",
      isSelected: false,
    },
  ];

  const [linksState, setLinksState] = useState<I_HeaderLinks[]>(links);

  const linkColorChenger = (linkDisplayName: string) => {
    const copyOfState = [...linksState];
    const selectedItemIndex = copyOfState.findIndex(
      (item) => item.nameForDisplay === linkDisplayName
    );
    copyOfState.forEach((item) => (item.isSelected = false));
    copyOfState[selectedItemIndex].isSelected = true;
    setLinksState(copyOfState);
  };
  return (
    <nav
      className={`
      2xl:flex 2xl:items-center 2xl:justify-between 2xl:w-full 2xl:h-20 box-border p-4 px-8
      ${styles.headerContainer}`}
    >
      <div
        className={`flex items-center justify-center 2xl:h-3/4 ${styles.left}`}
        onFocus={(e) => {
          e.currentTarget.style.width = "30%";
        }}
        onBlur={(e) => {
          e.currentTarget.style.width = "20%";
        }}
      >
        <GiMagnifyingGlass className="2xl:text-xl " />
        <input
          type="text"
          className="ml-4  "
          name=""
          id=""
          placeholder="Search By Location"
          onChange={(e) => {
            if (e.target.value.length === 0) return setIsSearchActived(false);
            else {
              setIsSearchActived(true);
              setSearchData(e.target.value);
            }
          }}
        />
      </div>
      <div className={`w-3/12 flex flex-row justify-between ${styles.right}`}>
        <div
          className={`w-8/12 flex items-center justify-between ${styles.links}`}
        >
          {linksState.map((item) => {
            return (
              <Links
                key={item.to}
                onClick={() => linkColorChenger(item.nameForDisplay)}
                options={item}
              />
            );
          })}
        </div>
        <div
          className={`w-2/12 flex flex-row items-center justify-between ${styles.helperIcons}`}
        >
          <AiOutlineBell />
          <AiOutlineMail />
        </div>
      </div>
    </nav>
  );
};

export default Header;

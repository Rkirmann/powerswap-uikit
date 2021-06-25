import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  logoComp?: React.Component;
  logoAlt?: string;
  logoSrc?: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .logo-img {
    height: 48px;
  }
`;

// TODO: We may want to load the default logo differently. This logo is huge and takes forever
// to load.
const DEFAULT_LOGO_SRC = "https://powerswap.finance/static/media/loot_logo.5ca5dce3.png";

const Logo: React.FC<Props> = ({ isPushed, togglePush, href, logoComp, logoAlt, logoSrc }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const altText = logoAlt || "Powerswap home page";
  const finalSrc = logoSrc || DEFAULT_LOGO_SRC;
  const innerLogo = logoComp || <img src={finalSrc} alt={logoAlt} className="logo-img" />;

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label={altText}>
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label={altText}>
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);

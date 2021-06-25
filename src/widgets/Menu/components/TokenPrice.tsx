import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  tokenPriceUsd?: number;
  link?: string;
  tokenSrc?: string;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 24px;
    margin-right: 8px;
    transition: transform 0.3s;
  }
  :hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const DEFAULT_TOKEN_SRC = "https://powerswap.finance/tokens/LOOT-LP.png";

const TokenPrice: React.FC<Props> = ({ tokenPriceUsd, link, tokenSrc }) => {
  const finalTokenSrc = tokenSrc || DEFAULT_TOKEN_SRC;
  return tokenPriceUsd ? (
    <PriceLink href={link} target="_blank">
      <img src={finalTokenSrc} className="token-icon" alt="Token Price" />
      <Text color="textSubtle" bold>{`$${tokenPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(TokenPrice);

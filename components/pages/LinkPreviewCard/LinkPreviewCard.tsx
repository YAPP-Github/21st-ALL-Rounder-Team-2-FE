"use client";

import { useMemo } from "react";
import Image from "next/image";
import { IconButton } from "@/components/ui/Button/IconButton/IconButton";
import { sendMessage } from "@/libs/message/message";
import { extractOpenGraph } from "@/utils/extractOpenGraph";
import { useGetIndexHtmlByLink } from "@/hooks/exhibition";
import * as S from "./LinkPreviewCard.styles";

type Props = {
  link: string;
};

export const LinkPreviewCard = ({ link }: Props) => {
  const { data: html } = useGetIndexHtmlByLink(link);
  const { title, image } = useMemo(() => extractOpenGraph(html), [html]);

  const handleClickLink = () => {
    sendMessage(["OPEN_NEW_WINDOW", { url: link }]);
  };

  return (
    <S.Wrapper>
      {image && <Image src={image} width={62} height={62} style={{ objectFit: "cover", borderRadius: "8px" }} alt="" />}
      <S.Info>
        <S.Url>{link}</S.Url>
        {title && <S.Title>{title}</S.Title>}
      </S.Info>
      <IconButton iconProps={{ name: "ChevronRightIcon", size: 24 }} onClick={handleClickLink} />
    </S.Wrapper>
  );
};

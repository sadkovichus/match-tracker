'use client';

import { UpdateBtn } from '@features/update-matches-btn';
import { fetchMatches } from '@shared/api';
import { MATCH_KEY } from '@shared/const';
import { SvgIcon } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';
import { ContainerStyle, ContentStyle, HeaderStyle } from './styles';
import { ErrorMessage } from './error-message';

export const Header = () => {
  const { error } = useQuery({
    queryKey: [MATCH_KEY],
    queryFn: fetchMatches,
    enabled: false,
  });

  return (
    <HeaderStyle>
      <ContainerStyle>
        <SvgIcon width={200} name='logo' />
        <ContentStyle>
          {error && <ErrorMessage />}
          <UpdateBtn />
        </ContentStyle>
      </ContainerStyle>
    </HeaderStyle>
  );
};

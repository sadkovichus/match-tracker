import { UpdateBtn } from '@features/update-matches-btn';
import { SvgIcon } from '@shared/ui';
import { Container } from '@shared/ui/container';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  padding: 53px 0 30px 0;
`;

const ContentStyle = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;

const ContainerStyle = styled(Container)`
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <ContainerStyle>
        <SvgIcon width={200} name='logo' />
        <ContentStyle>
          <UpdateBtn>
            Обновить <SvgIcon width={20} name='update' />
          </UpdateBtn>
        </ContentStyle>
      </ContainerStyle>
    </HeaderStyle>
  );
};

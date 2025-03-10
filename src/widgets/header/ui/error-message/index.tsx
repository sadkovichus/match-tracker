import { SvgIcon } from '@shared/ui'
import { ErrorStyle } from './styles'

export const ErrorMessage = () => {
	return (
    <ErrorStyle>
      <SvgIcon name='error' size={21} /> Ошибка: не удалось загрузить информацию
    </ErrorStyle>
  );
}
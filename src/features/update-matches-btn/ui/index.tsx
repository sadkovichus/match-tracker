'use client'

import { MATCH_KEY } from '@shared/const';
import { forwardRef, useState, useCallback } from 'react';
import { UpdateBtnProps } from '../model/index.type';
import { SvgIcon } from '@shared/ui';
import { useQueryClient } from '@tanstack/react-query';
import { ButtonStyle } from './styles';

export const UpdateBtn = forwardRef<HTMLButtonElement, UpdateBtnProps>(({ className }, ref) => {
  const queryClient = useQueryClient();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = useCallback(async () => {
    if (isUpdating) return;

    setIsUpdating(true);
    try {
      await queryClient.invalidateQueries({ queryKey: [MATCH_KEY] });
    } catch {
      console.error('Error while updating');
    } finally {
      setIsUpdating(false);
    }
  }, [isUpdating, queryClient]);

  return (
    <ButtonStyle
      data-updating={isUpdating}
      onClick={handleUpdate}
      ref={ref}
      className={className}
      disabled={isUpdating}
    >
      Обновить <SvgIcon width={20} name={isUpdating ? 'updating' : 'update'} />
    </ButtonStyle>
  );
});

UpdateBtn.displayName = 'UpdateBtn';

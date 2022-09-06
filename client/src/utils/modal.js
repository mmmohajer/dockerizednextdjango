import { clearModalType } from '@/reducers/general/modalType';
import { clearModalProps } from '@/reducers/general/modalProps';

export const clearModal = (dispatch) => {
  dispatch(clearModalType());
  dispatch(clearModalProps());
};

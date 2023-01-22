import { setTestimonials as setTestmonialsReducer } from '@/reducers/apiCalls/testimonials';

export const setTestimonials = (dispatch, data) => {
  dispatch(setTestmonialsReducer(data));
};

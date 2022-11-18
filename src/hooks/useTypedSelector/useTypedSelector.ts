import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

import { StateSchema } from 'store/store';

export const useTypedSelector: TypedUseSelectorHook<StateSchema> = useSelector;

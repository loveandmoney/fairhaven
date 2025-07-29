import {
  ISettings,
  SETTINGS_FRAGMENT
} from '../schemaTypes/singletons/settings';
import { sanityFetch } from './live';

export const getGlobalSettings: () => Promise<ISettings | null> = async () => {
  const query = `*[_type == "settings"][0]{
    ${SETTINGS_FRAGMENT}
  }`;
  const result = await sanityFetch({ query });

  const data = result?.data as ISettings | null;

  return data;
};

import lodash, { set } from "lodash";

export const handleOptionChange = (
  setOptions: (updateFn: (prev: any) => any) => void,
  key: string,
  value: number | string | boolean
) => {
  setOptions((prevOptions) => {
    const newOptions = lodash.cloneDeep(prevOptions);
    set(newOptions, key, value);
    return newOptions;
  });
};

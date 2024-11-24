import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
const MMKV = new MMKVLoader().initialize();
const MMKVEnc = new MMKVLoader().withEncryption().initialize();

export const useStorage = (key, defaultValue) => {
  const [value, setValue] = useMMKVStorage(key, MMKV, defaultValue);
  const removeValue = () => {
    MMKV.removeItem(key);
  };
  return [value, setValue,removeValue];
};

export const useEncryptedStorage = (key, defaultValue) => {
  const [value, setValue] = useMMKVStorage(key, MMKVEnc, defaultValue);
  const removeValue = () => {
    MMKVEnc.removeItem(key);
  };
  return [value, setValue,removeValue];
};
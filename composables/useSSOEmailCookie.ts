export const useSSOEmailCookie = () => {
  return useCookie("SSOEmail", { readonly: true });
};

export default useSSOEmailCookie;

export interface LoginUser {
  userStringProp: string;
  formProp?: UseFormReturn<UserSchema>;
  onSubmitProp?: (values) => void;
}

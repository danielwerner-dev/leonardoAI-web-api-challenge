import { MAX_USERNAME_LENGTH } from "@/models/userInfo";
import { Input, InputEventProps } from "@/shared/input";

export const UserInfoModal = (props: InputEventProps) => (
  <Input
    label="To get started, please type your username."
    placeholder="username"
    allowSpaces={false}
    maxLength={MAX_USERNAME_LENGTH}
    description={`${MAX_USERNAME_LENGTH} characters maximum.`}
    {...props}
  />
);

import { MAX_USERNAME_LENGTH } from "@/models/userInfo";
import { Input, InputEventProps } from "@/shared/input";

/**
 * A modal for entering the user's username. The modal has autofocus and
 * is prepopulated with "username" as the placeholder. The user can enter
 * up to `MAX_USERNAME_LENGTH` characters of text.
 */
export const UserInfoModal = (props: InputEventProps) => (
  <Input
    label="Lets start! Please type your username."
    placeholder="username"
    allowSpaces={false}
    maxLength={MAX_USERNAME_LENGTH}
    description={`${MAX_USERNAME_LENGTH} characters maximum.`}
    {...props}
  />
);

import { MAX_JOBTITLE_LENGTH } from "@/models/userInfo";
import { Input, InputEventProps } from "@/shared/input";

/**
 * A modal for entering the user's job title. The modal has autofocus and
 * is prepopulated with "Software Engineer" as the placeholder. The user
 * can enter up to `MAX_JOBTITLE_LENGTH` characters of text.
 */
export const JobInfoModal = (props: InputEventProps) => (
  <Input
    label="Next, enter your job title."
    autoFocus
    allowSpaces
    placeholder="Software Engineer"
    maxLength={MAX_JOBTITLE_LENGTH}
    description={`${MAX_JOBTITLE_LENGTH} characters maximum.`}
    {...props}
  />
);

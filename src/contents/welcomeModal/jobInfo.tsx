import { MAX_JOBTITLE_LENGTH } from "@/models/userInfo";
import { Input, InputEventProps } from "@/shared/input";

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

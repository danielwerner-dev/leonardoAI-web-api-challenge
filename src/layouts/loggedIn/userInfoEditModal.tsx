import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

import {
  MAX_JOBTITLE_LENGTH,
  MAX_USERNAME_LENGTH,
  UserInfo,
} from "@/models/userInfo";
import { Input } from "@/shared/input";
import { UserInfoContext } from "@/state/userInfoContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * A modal that allows the user to edit their username and job title.
 * The modal is shown when the user is logged in and the user info is available in the context.
 * The modal is centered on the screen, and the content is rendered in a {@link ModalContent} component.
 * The modal has a submit button that updates the user info and closes the modal when clicked.
 * The modal has a cancel button that closes the modal when clicked.
 *
 * @param {{ isOpen: boolean, onClose: () => void }} props
 * @returns {JSX.Element}
 */
export const UserInfoEditModal = ({ isOpen, onClose }: Props) => {
  const { userInfo, updateUserInfo } = useContext(UserInfoContext);
  const [newUserInfo, setNewUserInfo] = useState<UserInfo>(userInfo!);

  /**
   * Submits the form by updating the user info in the context,
   * and then closes the modal.
   */
  function submit() {
    updateUserInfo(newUserInfo);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Edit user info</ModalHeader>

        <ModalBody>
          <Stack spacing={6}>
            <Container>
              <Input
                label="Username"
                placeholder="username"
                allowSpaces={false}
                maxLength={MAX_USERNAME_LENGTH}
                description={`${MAX_USERNAME_LENGTH} characters maximum.`}
                onChange={(value) =>
                  setNewUserInfo((v) => ({
                    ...v,
                    username: value,
                  }))
                }
                onEnter={submit}
                defaultValue={userInfo!.username}
              />
            </Container>

            <Container>
              <Input
                label="Job Title"
                allowSpaces
                placeholder="Software Engineer"
                maxLength={MAX_JOBTITLE_LENGTH}
                description={`${MAX_JOBTITLE_LENGTH} characters maximum.`}
                onChange={(value) =>
                  setNewUserInfo((v) => ({
                    ...v,
                    jobTitle: value,
                  }))
                }
                onEnter={submit}
                defaultValue={userInfo!.jobTitle}
              />
            </Container>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={submit} isDisabled={false}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

"use client";

import {
  Avatar,
  Box,
  Button,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";

import { UserInfoContext } from "@/state/userInfoContext";
import { UserInfoEditModal } from "./userInfoEditModal";

/**
 * A header component that renders a button with the user's username and job title,
 * and a modal that allows the user to edit their information.
 *
 * @returns A JSX element containing the header component.
 */
export const Header = () => {
  const { userInfo } = useContext(UserInfoContext);

  const {
    isOpen: isUserEditModalOpen,
    onOpen: openUserEditModal,
    onClose: closeUserEditModal,
  } = useDisclosure();

  return (
    <>
      <Box
        bg="black"
        padding={3}
        mb={20}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Tooltip label="Edit" hasArrow>
          <Button
            variant="link"
            color="white"
            gap={2}
            fontWeight="normal"
            onClick={openUserEditModal}
          >
            <Avatar size="sm" src='https://bit.ly/dan-abramov' />
            <Text>
              {userInfo!.username} ({userInfo!.jobTitle})
            </Text>
          </Button>
        </Tooltip>
      </Box>
      <UserInfoEditModal
        isOpen={isUserEditModalOpen}
        onClose={closeUserEditModal}
      />
    </>
  );
};

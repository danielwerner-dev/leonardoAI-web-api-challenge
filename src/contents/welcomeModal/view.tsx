"use client";

import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SlideFade
} from "@chakra-ui/react";
import { useContext, useState } from "react";

import { UserInfoContext } from "@/state/userInfoContext";

import { JobInfoModal } from "./jobInfo";
import { UserInfoModal } from "./userInfo";

const MAX_NUM_SLIDES = 2;

/**
 * A modal that guides the user through a 2-step process of entering
 * their username and job title. The modal is shown when the user is
 * logged in and no user info is available in the context.
 *
 * The modal starts by asking for the user's username, and then asks
 * for their job title. The modal is closed when the user finishes
 * entering their job title.
 *
 * The modal is centered on the screen, and the content is rendered
 * in a {@link ModalContent} component.
 *
 * @returns The WelcomeModal component.
 */
export const WelcomeModal = () => {
  const { updateUserInfo } = useContext(UserInfoContext);

  const [username, setUsername] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [currSlide, setCurrSlide] = useState<number>(1);

  /**
   * Increments the current slide number.
   * This is used to navigate forward through the modal's
   * two slides.
   */
  function gotoNextSlide() {
    setCurrSlide((v) => v + 1);
  }

  /**
   * Finishes the welcome modal by storing the entered username and job title,
   * and then closes the modal.
   */
  function finish() {
    updateUserInfo({ username, jobTitle });
  }

  return (
    <Modal isOpen={true} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Welcome!</ModalHeader>

        <ModalBody>
          {currSlide === 1 && (
            <UserInfoModal
              onChange={setUsername}
              onEnter={gotoNextSlide}
            />
          )}
          {currSlide === 2 && (
            <SlideFade in={true}>
              <JobInfoModal onChange={setJobTitle} onEnter={finish} />
            </SlideFade>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={() => {
              if (currSlide === MAX_NUM_SLIDES) {
                finish();
              } else {
                gotoNextSlide();
              }
            }}
            isDisabled={currSlide === 1 ? username === "" : jobTitle === ""}
          >
            {currSlide === MAX_NUM_SLIDES ? (
              <>
                Done
                <CheckIcon ml={1} />
              </>
            ) : (
              <>
                Next
                <ArrowForwardIcon ml={1} />
              </>
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

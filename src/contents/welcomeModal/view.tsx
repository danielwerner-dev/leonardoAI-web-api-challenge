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

export const WelcomeModal = () => {
  const { updateUserInfo } = useContext(UserInfoContext);

  const [username, setUsername] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [currSlide, setCurrSlide] = useState<number>(1);

  function gotoNextSlide() {
    setCurrSlide((v) => v + 1);
  }

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

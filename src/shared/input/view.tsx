import { Input as ChakraInput, InputProps, Text } from "@chakra-ui/react";
import { useState } from "react";
import { InputEventProps } from "./models";

type Props = InputEventProps &
  Omit<InputProps, "onChange" | "onKeyDown"> & {
    label: string;
    description: string;
    allowSpaces: boolean;
  };

const startsWithAlphabetRegex = /^[^a-zA-Z].*/;
const alphanumericRegex = /[^0-9a-zA-Z/-\s]/;

/**
 * An input component that comes with a label and description,
 * and handles validation. Validation is set as follows:
 *    - Must begin with an alphabet
 *    - Must be alphanumeric (but can accept hyphens)
 *    - Spaces are or are not allowed (depending on `allowSpaces`)
 */
export const Input = ({
  label,
  description,
  allowSpaces,
  onChange: customOnChange,
  onEnter,
  ...inputProps
}: Props) => {
  const [error, setError] = useState<string>();

  /**
   * Handles validation on the input field. Validation is set as follows:
   *    - Must begin with an alphabet
   *    - Must be alphanumeric (but can accept hyphens)
   *    - Spaces are or are not allowed (depending on `allowSpaces`)
   *
   * If the input is invalid, sets the error state to a string describing
   * the invalid input. If the input is valid, sets the error state to undefined.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   * The event object from the input field.
   */
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value?.trim();
    customOnChange(value);

    if (startsWithAlphabetRegex.test(value)) {
      setError("Must begin with an alphabet.");
    } else if (!allowSpaces && value.includes(" ")) {
      setError("No spaces allowed.");
    } else if (alphanumericRegex.test(value)) {
      setError("Please enter alphanumeric characters only.");
    } else {
      setError(undefined);
    }
  }

  return (
    <>
      <Text mb={2}>{label}</Text>
      <ChakraInput
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onEnter();
        }}
        {...inputProps}
      />
      <Text fontSize="xs" color={!!error ? "red" : "gray"} mt={1} ml={1}>
        {error || `Alphanumeric characters only. ${description}`}
      </Text>
    </>
  );
};

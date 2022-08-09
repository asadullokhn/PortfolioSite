import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Tooltip
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import useSound from "use-sound";

import lightswitch from "assets/audios/lightswitch.mp3";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const [play] = useSound(lightswitch, {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = () => {
    text === "light" ? play({ id: "off" }) : play({ id: "on" });
    toggleColorMode();
  };

  return (
    <Tooltip
      label={text === "light" ? "Light mode" : "Dark mode"}
      aria-label="A tooltip"
    >
      <IconButton
        size="md"
        fontSize="md"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={handleClick}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        _hover={{
          bg: useColorModeValue("gray.200", "gray.900")
        }}
        {...props}
      />
    </Tooltip>
  );
};

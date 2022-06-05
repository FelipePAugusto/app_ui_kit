import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { 
    Box,
    Button,
    Center,
    Checkbox,
    FormControl,
    Heading,
    HStack,
    Icon,
    Image,
    Input,
    Slider,
    Switch,
    Text,
    useColorMode,
    VStack,
    WarningOutlineIcon,
} from "native-base";

export function SignIn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <Center 
        height="full"
        _dark={{ bg: "black" }}
        _light={{ bg: "white" }}
      >        
        <Image 
          size={180}
          source={{ uri: "https://github.com/FelipePAugusto.png" }}
          alt="User Photo"
          resizeMode="cover"
          rounded={95}
        />
        <VStack 
          width="full"
          p={7}
        > 
          <Center>
            <HStack alignItems="center" space={4} mt={105}>
              <Text>Dark</Text>
              <Switch 
                size="sm" 
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                aria-label={
                  colorMode === "light" ? "Troque para o Tema Claro." : "Troque para o Tema Escuro."
                }
              />
              <Text>Light</Text>
            </HStack>
          </Center>
        </VStack>
      </Center>
  );
}
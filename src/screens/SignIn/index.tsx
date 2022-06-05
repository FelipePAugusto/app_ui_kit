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
          <Box width="full">
              <Heading 
                color="coolGray.700" 
                mb={5} 
                _dark={{color: "white"}} 
                _light={{color: "black"}}
              >
                  Entrar
              </Heading>

              <FormControl isInvalid isRequired>
                <FormControl.Label>E-mail</FormControl.Label>
                <Input 
                  placeholder="seu@email.com"
                  type="text"
                  InputLeftElement={
                    <Icon 
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml={2}
                      color="muted.400"                    
                    />
                  }
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  E-mail inválido. 
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <FormControl.Label>Senha</FormControl.Label>
                <Input 
                  placeholder="Informe sua senha."
                  type="password"
                  InputLeftElement={
                    <Icon 
                      as={<MaterialIcons name="lock" />}
                      size={5}
                      ml={2}
                      color={"muted.400"} 
                    />
                  }
                />

                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Password inválido. 
                </FormControl.ErrorMessage>
              </FormControl>

              <Button 
                mt={7}
                colorScheme="purple"
                mb={2}
              >
                Entrar
              </Button>

          </Box>
          
          <Box alignItems="center" w="100%" mt={10}>
            <Slider w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="Exemplo de Slider" step={10}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Box>

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
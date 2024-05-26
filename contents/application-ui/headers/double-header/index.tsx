import {
  Box,
  Container,
  HStack,
  Heading,
  IconButton,
  Link,
  Tab,
  TabList,
  Tabs,
  VStack,
  useDisclosure,
} from "@yamada-ui/react"
import type { FC } from "react"
import { useState } from "react"

const userLinks = [
  { link: "#", label: "Privacy & Security" },
  { link: "#", label: "Account settings" },
  { link: "#", label: "Support options" },
]

const mainLinks = [
  { link: "#", label: "Book a demo" },
  { link: "#", label: "Documentation" },
  { link: "#", label: "Community" },
  { link: "#", label: "Academy" },
  { link: "#", label: "Forums" },
]

const DoubleHeader: FC = () => {
  const [index, onChange] = useState<number>(0)
  const { isOpen, onToggle } = useDisclosure()

  const mainItems = mainLinks.map((item, i) => {
    const active = i === index
    return (
      <Tab
        as={Link}
        href={item.link}
        key={item.label}
        value={item.label}
        color={["blackAlpha.700", "whiteAlpha.700"]}
        onClick={(event) => event.preventDefault()}
        data-active={active || undefined}
        fontWeight={700}
        borderBottomWidth="2px"
        _hover={{
          textDecor: "none",
          color: !active ? ["black", "white"] : undefined,
        }}
      >
        {item.label}
      </Tab>
    )
  })

  const secondaryItems = userLinks.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      color={["blackAlpha.700", "whiteAlpha.700"]}
      _hover={{ textDecor: "none", color: ["black", "white"] }}
    >
      {item.label}
    </Link>
  ))

  return (
    <Box as="header" p="lg">
      <Container
        p="0"
        borderBottomWidth="1px"
        borderBottomColor={["blackAlpha.500", "whiteAlpha.500"]}
        borderBottomStyle="solid"
      >
        <HStack justifyContent="space-between" containerType="inline-size">
          <Box flex={1}>
            <Heading
              size="lg"
              color={["black", "white"]}
              as={Link}
              _hover={{ textDecor: "none" }}
              onClick={(e) => e.preventDefault()}
            >
              Yamada UI
            </Heading>
          </Box>
          <VStack
            flex={1}
            _container={[{ maxW: "750px", css: { display: "none" } }]}
          >
            <HStack justify="flex-end">{secondaryItems}</HStack>
            <Tabs gap="0" as="nav" onChange={onChange}>
              <TabList justifyContent="center" border="none">
                {mainItems}
              </TabList>
            </Tabs>
          </VStack>
          <IconButton
            title="Menu"
            type="button"
            variant="unstyled"
            p="1"
            onClick={onToggle}
            _container={[{ minW: "750px", css: { display: "none" } }]}
            icon={
              <>
                <Box
                  position="absolute"
                  width="24px"
                  height="1px"
                  transform={isOpen ? "rotate(45deg)" : "translateY(-8px)"}
                  bg={["black", "white"]}
                  transitionDuration="300ms"
                  transitionProperty="all"
                />
                <Box
                  position="absolute"
                  width="24px"
                  height="1px"
                  transform={isOpen ? "translateX(20px)" : undefined}
                  opacity={isOpen ? 0 : 1}
                  bg={["black", "white"]}
                  transitionDuration="400ms"
                  transitionProperty="all"
                />
                <Box
                  position="absolute"
                  width="24px"
                  height="1px"
                  transform={isOpen ? "rotate(-45deg)" : "translateY(8px)"}
                  bg={["black", "white"]}
                  transitionDuration="300ms"
                  transitionProperty="all"
                />
              </>
            }
          />
        </HStack>
      </Container>
    </Box>
  )
}

export default DoubleHeader

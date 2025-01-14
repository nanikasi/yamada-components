import {
  Dropzone,
  DropzoneAccept,
  DropzoneIdle,
  DropzoneReject,
  PDF_ACCEPT_TYPE,
} from "@yamada-ui/dropzone"
import { CloudUpload } from "@yamada-ui/lucide"
import { Center, Button, Text, VStack } from "@yamada-ui/react"
import { useRef, type FC } from "react"

const WithButton: FC = () => {
  const openRef = useRef<() => void>(null)

  const onOpen = () => {
    if (openRef.current) openRef.current()
  }

  return (
    <VStack maxW="lg">
      <Dropzone
        openRef={openRef}
        accept={PDF_ACCEPT_TYPE}
        h="xs"
        flexDir="column"
        multiple
      >
        <Center color="whiteAlpha.800">
          <DropzoneAccept>
            <CloudUpload boxSize="3.15rem" />
          </DropzoneAccept>
          <DropzoneReject>
            <CloudUpload boxSize="3.15rem" />
          </DropzoneReject>
          <DropzoneIdle>
            <CloudUpload boxSize="3.15rem" />
          </DropzoneIdle>
        </Center>

        <Text
          textAlign="center"
          fontWeight={700}
          fontSize="lg"
          color="whiteAlpha.800"
          mt="lg"
          userSelect="none"
        >
          <DropzoneAccept>Drop files here</DropzoneAccept>
          <DropzoneReject>Pdf file less than 30mb</DropzoneReject>
          <DropzoneIdle>Upload resume</DropzoneIdle>
        </Text>

        <Text
          textAlign="center"
          fontSize="sm"
          mt="xs"
          color="gray"
          px="md"
          userSelect="none"
        >
          Drag&apos;n&apos;drop files here to upload. We can accept only{" "}
          <Text as="i">.pdf</Text> files that are less than 30mb in size.
        </Text>
      </Dropzone>

      <Button
        onClick={onOpen}
        w="xs"
        alignSelf="center"
        bottom="lg"
        rounded="3xl"
        colorScheme="primary"
      >
        Select files
      </Button>
    </VStack>
  )
}

export default WithButton

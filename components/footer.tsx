import { Box, Link } from "@chakra-ui/react"
function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      whiteSpace="nowrap"
      borderTop="1px solid"
      borderColor="#3C5AA6"
      bg="#2A75BB"
      px={10}
      py={3}
      mt="auto"
    >
      <Box
        as="p"
        color="#FFCB05"
        fontSize="sm"
        fontWeight="medium"
        textAlign="center"
      >
        made by <Link href="https://github.com/SubashD22" target="_blank">Subash D</Link>
      </Box>
    </Box>
  )
}

export default Footer;
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Heading, Text } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import ServiceData from "components/cards/service-data";
import miner from "assets/images/miner.png";
import farming from "assets/images/farming.png";
import chiaLogo from "assets/images/icons/chia-logo.png";
import chiaCalc from "assets/images/icons/chia-calc.png";
import chiaLeaf from "assets/images/icons/chia-leaf.png";

const data = [
  {
    id: 1,
    title: "Net Space",
    description: `2.58 TiB`,
  },
  {
    id: 2,
    title: "Pool Space",
    description: `0.35 TiB`,
  },
  {
    id: 3,
    title: "forms online",
    description: `8`,
  },
  {
    id: 4,
    title: "Time to Win",
    description: `2 minutes`,
  },
];

const TestNetBanner = () => {
  return (
    <Box as="section" id="chia" sx={styles.section}>
      <SectionHeading
        sx={styles.heading}
        title="Indian Pool"
        description="Join forces to take back control of predictable Chia farming winnings"
      />
      <Box as="figure" sx={styles.illustration}>
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <ServiceData key={item.id} item={item} />
          ))}
        </Box>
        {/* <Box sx={styles.buttonWrapper}>
              <Button>Get Started</Button>
            </Box> */}
        <Image src={farming} alt="miner" />
      </Box>
    </Box>
  );
};

export default TestNetBanner;

const styles = {
  section: {
    display: "grid",
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    // pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    left: "50%",
    gridRow: "1 / span 1",
    // maxWidth: [null, null, null, 455, 660],
  },
  illustration: {
    display: ["block", null, null, "flex"],
    position: "relative",
    img: {
      display: ["none", null, null, "block"],
      maxWidth: ["100%"],
      m: ["0 auto"],
    },
  },
  contentWrapper: {
    gap: 5,
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplate: "285px / 20vw 20vw",
  },
};

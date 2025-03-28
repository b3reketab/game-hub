import rawg from 'assets/images/RAWG.png'
import { ReactComponent as Github } from 'assets/images/github.svg'
import {
  StyledDescription,
  Pitch,
  Links,
  Link,
  RAWGLogo,
  EnjoyBlock,
  Header,
} from 'pages/Home/Description/styles'

const Description = () => (
  <StyledDescription>
    <Pitch>
      <Header>Game Hub</Header>
      <p>
          World's Number One Game Destination!
      </p>
      <EnjoyBlock>
        <p>Enjoy</p> <p>😉</p>
      </EnjoyBlock>
    </Pitch>
    <Links>
      <Link href="https://github.com/b3reketab" target="_blank">
        <Github />
        b3reketab
      </Link>
      <Link href="https://rawg.io/apidocs" target="_blank">
        <RAWGLogo src={rawg} alt="RAWG logo" />
        RAWG API
      </Link>
    </Links>
  </StyledDescription>
)

export default Description

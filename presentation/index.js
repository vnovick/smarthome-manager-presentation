// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Appear,
  Fill,
  Fit,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Code,
  Link,
  Image
} from "spectacle";


import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");


const theme = createTheme({
  primary: "#1C133A",
  secondary: "#FFFFFF",
  tertiary: "aqua",
  quartenary: "#AE30FF"
}, {
  primary: "Roboto",
  secondary: "Helvetica"
});

const images = {
  background: require("../assets/background.jpg"),
  vscaper: require("../assets/vscaper.png"),
  vscaperbg: require("../assets/vscaper.bg.png"),
  book: require("../assets/book.png"),
  bookQR: require("../assets/bookQR.png"),
  smartHome: require("../assets/smart-home.jpg"),
  letusin: require("../assets/funnyletusin.jpg"),
  smartHomebg: require("../assets/smarthomesbg.jpg"),
  toomuchapps: require("../assets/toomuchapps.png"),
  smarthomeHouse: require("../assets/smarthomeHouse.png"),
  brands: require("../assets/brands.png"),
  bridge: require("../assets/bridge.jpg"),
  huearchitecture: require("../assets/huearchitecture.jpg"),
  arp: require("../assets/arp.png"),
  arpresult: require("../assets/arpresult.png"),
  sniffing: require("../assets/wiresharksniffing.png"),
  mhr1: require("../assets/mhr1.png"),
  mhr2: require("../assets/mhr2.png"),
  mhr3: require("../assets/mhr3.png"),
  wemoarchitecture: require("../assets/wemoarchitecture.png"),
  code: require("../assets/code-background.png"),
  if1: require("../assets/if1.png"),
  if2: require("../assets/if2.png"),
  if3: require("../assets/if3.png"),
  codeBg: require("../assets/code-background.png")
};

const BackgroundSlide = ({ children, ...rest }) => (
  <Slide bgImage={images.background} {...rest} darken={.5}>
    { children }
  </Slide>
);

const bgSlideProps = {
  bgDarken: .5,
  // bgImage: images.background
};


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} theme={theme} progress="none" controls={false}>
        <Slide {...bgSlideProps}>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Controlling
          </Heading>
          <Heading size={2}>
            Smart Homes
          </Heading>
          <Heading size={4} italic lineHeight={1} textColor="quartenary">
            with React Native
          </Heading>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={3} lineHeight={1} textColor="secondary">
            @VladimirNovick
          </Heading>
          <Text textColor="tertiary" size={3}>Independent Consultant</Text>
          <Text textColor="tertiary">web/mobile/vr/ar/iot</Text>
          <Text textColor="quartenary">
            vnovick.com
          </Text>
        </Slide>
        <Slide {...bgSlideProps}>
          <div style={{ display: 'flex'}}>
            <Image src={images.book} height="70vh"/>
            <div style={{ paddingLeft: "50px", flex: 1}}>
              <Text textColor="secondary" size={3}>Published Author</Text>
              <Link href="https://goo.gl/mYiVmF">
                <Text textColor="quartenary" size={3} style={{ textDecoration: 'none', marginTop: '20px' }}>https://goo.gl/mYiVmF</Text>
              </Link>
              <Image src={images.bookQR} style={{marginTop: "50px"}}/>
            </div>
          </div>
        </Slide>
        <Slide {...bgSlideProps} bgImage={images.vscaperbg}>
          <Heading textColor="tertiary" style={{ marginBottom: "50px" }} size={6}>Co-Founder & CTO</Heading>
          <Image src={images.vscaper} width="50%"/>
          <Link href="https://vscaper.com"><Appear><Text size={5} 
           style={{ marginTop: "50px"}} textColor="tertiary" >vscaper.com</Text></Appear></Link>
        </Slide>
        <Slide bgDarken={.3} bgImage={images.smartHomebg}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Smart homes
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.letusin} fit />
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Image src={images.smarthomeHouse} width="100%"/>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={2} lineHeight={2} textColor="secondary">
            But there is problem
          </Heading>
          <Image src={images.toomuchapps} width="60%"/>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={2} lineHeight={1} textColor="secondary">
            APIs and even protocols are different
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Image src={images.brands} />
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Philips Hue
          </Heading>
          <Image src={images.huearchitecture} />
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary">
            Find out your IP:
          </Heading>
          <Text textColor="secondary" textSize={28}>
            https://www.meethue.com/api/nupnp
          </Text>
          <iframe src="https://www.meethue.com/api/nupnp" width="100%" height="30px" style={{ border: 'none', maxWidth: "600px", backgroundColor: 'white', marginTop: '50px' }} />
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={1} textColor="secondary">
            Access your Philips Hue Debug console
          </Heading>
          <Text textColor="secondary" textSize={28}>
            http://[philips hue bridge ip]/debug/clip.html
          </Text>
          <iframe src="http://10.0.0.1/debug/clip.html" width="100%" height="800px" style={{ border: 'none', maxWidth: "600px" }}/>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Wemo
          </Heading>
          <Image src={images.wemoarchitecture} width="90%"/>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Magic Home
          </Heading>
          <Text textColor="secondary">Works over TCP sockets on port 5577</Text>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary">
            What do we need to develop our smart home mobile app
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={3} lineHeight={1} textColor="secondary">
            Build our own bridge
          </Heading>
          <Appear><Image src={images.bridge} /></Appear>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Not without hacking
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            UPNP protocol
          </Heading>
          <Text textColor="secondary" italic>Devices can be discovered over wifi by using this protocol</Text>
          <Appear>
            <Text textColor="quartenary" style={{marginTop: "50px" }}>
              Get device MAC address
            </Text>
          </Appear>
          <Appear>
            <div>
              <Image src={images.arp} style={{margin: 0}}/>
              <Image src={images.arpresult} style={{margin: 0}} />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Network packet sniffing with wireshark
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Image src={images.sniffing} />
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            For Magic Home things are more complicated
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">Create interface for our connected phone</Heading>
          <Appear>
            <Image src={images.if1} style={{margin: 0}}/>
          </Appear>
          <Appear>
            <Image src={images.if2} style={{margin: 0}}/>
          </Appear>
          <Appear>
            <Image src={images.if3} style={{margin: 0}}/>
          </Appear>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Image src={images.mhr1} />
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Image src={images.mhr2} />
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Image src={images.mhr3} />
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Use some libraries out there or write your own low level code
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={2} lineHeight={1}>
            Introducing
          </Heading>
          <Heading size={6} lineHeight={2} textColor="secondary" italic>
            <Code textColor="secondary"style={{ fontWeight: "normal", color: "#AE30FF" }}>smarthome-manager</Code> library!
          </Heading>
          <Image src="https://badge.fury.io/js/smarthome-manager.svg" width="20%"/>
          <List style={{ listStyle: "none" }}>
            <ListItem>
              <Appear><Text lineHeight={1.5} textColor="tertiary" italic>Control multiple brands with one package</Text></Appear></ListItem>
            <ListItem><Appear><Text lineHeight={1.5} textColor="tertiary" italic>UPNP AutoDiscovery mode</Text></Appear></ListItem>
            <ListItem><Appear><Text lineHeight={1.5} textColor="tertiary" italic>First class Typescript support</Text></Appear></ListItem>
            <ListItem><Appear><Text lineHeight={1.5} textColor="tertiary" italic>Human readable device API abstraction</Text></Appear></ListItem>
            <ListItem><Appear><Text lineHeight={1.5} textColor="tertiary" italic>Has access to low level device interactions</Text></Appear></ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Create your own GraphQL powered bridge never been so simple
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            It's Demo time
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary">
            Start your own bridge
          </Heading>
          <Text textColor="secondary" textSize={28}>
            http://localhost:4000/
          </Text>
          <iframe src="http://localhost:4000/" width="100%" height="800px"/>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          bgDarken={.8}
          bgImage="https://ak9.picdn.net/shutterstock/videos/27477769/thumb/1.jpg"
          bgColor="primary"
          textSize=".8em"
          code={require("raw-loader!../codesamples/rpi-controller")}
          ranges={[
            { loc: [0, 1], note: "require isomorphic-fetch since library uses it under the hood" },
            { loc: [1, 2], note: "import graphql-yoga for server setup" },
            { loc: [3, 8], note: "import library and enums" },
            { loc: [9, 10], note: "import node-ssdp Client. can be substituted to other client" },
            { loc: [108, 114], note: "Pass array of Device objects with dedicated IPs" },
            { loc: [115, 119], note: "For wemo pass setupUrl" },
            { loc: [120, 124] },
            { loc: [125, 131], note: "Specify ManagerOptions" },
            { loc: [40, 43], note: "get supported devices query resolver" },
            { loc: [43, 50], note: "getHues query resolver" },
            { loc: [50, 55], note: "getMagicHomeState query resolver" },
            { loc: [58, 64], note: "toggleHue State" },
            { loc: [75, 80], note: "Wemo toggle state" },
            { loc: [89, 98], note: "Magic Home controller with Brightness" },
            { loc: [99, 105], note: "Party time" },
            { loc: [132, 140], note: "start our server" }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="jsx"
          bgDarken={.8}
          bgImage="https://ak9.picdn.net/shutterstock/videos/27477769/thumb/1.jpg"
          bgColor="primary"
          textSize=".8em"
          code={require("raw-loader!../codesamples/lightController")}
          ranges={[
            { loc: [4, 5], note: "" },
            { loc: [7, 11], note: "" },
            { loc: [11, 19], note: "" },
            { loc: [21, 23], note: "" },
            { loc: [35, 37], note: "" },
            { loc: [38, 45], note: "" },
            { loc: [46, 48] },
            { loc: [57, 75] },
            { loc: [97, 98], note: "" },
            { loc: [106, 108], note: "" },
            { loc: [114, 126], note: "" },
            { loc: [133, 141], note: "" },
            { loc: [165, 167] },
            { loc: [170, 177], note: "" },
            { loc: [177, 183], note: "" },
            { loc: [195, 199], note: "" },
            { loc: [202, 209], note: "" },
            { loc: [224, 229], note: "" },
            { loc: [264, 271], note: "" },
            { loc: [289, 292], note: "" },
            { loc: [294, 296], note: "" },
            { loc: [325, 331], note: "BasicController" },
            { loc: [331, 341], note: "" }
          ]}
        />
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Roadmap for smarthome-manager
          </Heading>
          <List textColor="tertiary" style={{ listStyle: 'none' }}>
            <ListItem>
              <Appear><Text textColor="tertiary">Finish subscriptions for all state changes</Text></Appear>
            </ListItem>
            <ListItem>
              <Appear><Text textColor="tertiary">Add full test Coverage</Text></Appear>
            </ListItem>
            <ListItem>
              <Appear><Text textColor="tertiary">Perform physical tests on all Philips Hue, Wemo and Magic Home available devices</Text></Appear>
            </ListItem>
            <ListItem>
              <Appear><Text textColor="tertiary">Wrap additional Philips Hue Apis</Text></Appear>
            </ListItem>
            <ListItem>
              <Appear><Text textColor="tertiary">Add GraphQL Helpers to simplify building GraphQL server</Text></Appear>
            </ListItem>
            <ListItem>
              <Appear><Text textColor="tertiary">Improve Documentation</Text></Appear>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Contributing
          </Heading>
          <Link href="http://github.com/vnovick/smarthome-manager"><Text textColor="tertiary">http://github.com/vnovick/smarthome-manager</Text></Link>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Thank You
          </Heading>
          <Link href="https://github.com/vnovick/smarthome-manager-presentation"><Text size={4} style={{ fontSize: "25px"}} textColor="tertiary">Repo: github.com/vnovick/smarthome-manager-presentation</Text></Link>
        </Slide>
      </Deck>
    );
  }
};
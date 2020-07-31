import Head from "next/head";
import {
  Avatar,
  Switch,
  IconButton,
  Divider,
  Card,
  CardContent,
  ToggleButtonGroup,
  ToggleButton,
} from "ui-neumorphism";
import { Sun, Moon } from "react-feather";
import Lamp from "../components/lamp";
import styles from "../styles/Home.module.css";
import colors from "../util/colors";



const defaultIntensity = 50;

export default function Home() {
  const [lit, setLit] = React.useState(false);
  const [intensity, setIntensity] = React.useState(defaultIntensity);
  const [color, setColor] = React.useState(colors[0]);

  const reduce = (action, args) => {
    switch (action) {
      case "toggleLight": // Toggle the lamp
        setLit(args);
        // TODO: make API call
        break;
      case "setIntensity": // update light value
        let value = parseInt(args);
        // fix cases where value is out boudaries
        if (value > 100){value = 100}
        if (value < 1){value = 1}
        // update intensity value
        setIntensity(value);
        // TODO: make API call
        break;
      case "setColor": // change the color according to the selected one
        setColor(args);
        // TODO: make API call
        break;
      default:
        throw Error("You must provide a valid reducer");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Salon</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Alad1 - gestion de votre lampe connectée</title>

        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#8a2be2" />
      </Head>
      <main className={styles.main}>
        <section className={styles.heading}>
          <div>
            <h1 className={styles.title}>Salon</h1>
            <Switch
              id="lit"
              label={lit ? "Allumé" : "Éteint"}
              checked={lit}
              onChange={(event) => reduce("toggleLight", event.checked)}
            />
          </div>
          <div>
            <Lamp 
              on={lit} 
              color={color}
              intensity={intensity / 100} 
              height={"50vh"}
            />
          </div>
        </section>
        <Card className={styles.options} >
          <CardContent>
            <h3 style={{ padding: "1em", paddingBottom: 0, textAlign: "center" }}>
              Intensité
            </h3>
            <div className={styles.intensity}>
              <div className={styles.icon}>
                <IconButton 
                  size="large" 
                  rounded 
                  text={intensity <= 1} 
                  onClick={(event) => reduce('setIntensity', intensity - 5)}
                  disabled={intensity <= 1}
                >
                  <Moon />
                </IconButton>
              </div>
              <input
                className={`${styles.intensitySlider} ${lit ? styles.lit : ""}`}
                type="range"
                min={1}
                max={100}
                value={intensity}
                // defaultValue={50}
                id="myRange"
                onChange={(event) => {
                  reduce("setIntensity", event.target.value);
                }}
              />
              <div className={styles.icon}>
                <IconButton 
                  size="large" 
                  rounded 
                  text={intensity >= 100} 
                  onClick={(event) => reduce('setIntensity', intensity + 5)}
                  disabled={intensity >= 100}
                >
                  <Sun />
                </IconButton>
              </div>
            </div>
          </CardContent>
          <br />
          <ToggleButtonGroup
            mandatory
            rounded
            onChange={(event) => reduce('setColor', event.active)}
            value={color}
          // onChange={this.mandatoryGroupChange.bind(this)}
          >
            {colors.map((c) => (
              <ToggleButton key={c} size="large" value={c}>
                <Avatar size="small" bgColor={c} />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Card>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}

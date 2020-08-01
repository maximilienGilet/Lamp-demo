import {
  Switch,
  IconButton,
  Card,
  CardContent,
} from "ui-neumorphism";
import { Sun, Moon } from "react-feather";
import Lamp from "../components/lamp";
import ColorButton from "../components/colorButton";
import HueSlider from "../components/hueSlider";
import styles from "../styles/Home.module.css";
import colors from "../util/colors";
import hsl2hex from "../util/hsl2hex";

const defaultIntensity = 50;

export default function Home() {
  const [lit, setLit] = React.useState(false);
  const [intensity, setIntensity] = React.useState(defaultIntensity);
  const [color, setColor] = React.useState(colors[0]);
  const [hue, setHue] = React.useState(180);

  const reduce = (action, args) => {
    switch (action) {
      case "toggleLight": // Toggle the lamp
        setLit(args);
        // TODO: make API call
        break;
      case "setIntensity": // update light value
        let value = parseInt(args);
        // fix cases where value is out boudaries
        if (value > 100) { value = 100 }
        if (value < 1) { value = 1 }
        // update intensity value
        setIntensity(value);
        // TODO: make API call
        break;
      case "setColor": // change the color according to the selected one
        setColor(args);
        // TODO: make API call
        break;
      case "setHue":
        // update the hue
        setHue(args);
        reduce('setColor', hsl2hex(args, 90, 50));
        break;
      default:
        throw Error("You must provide a valid reducer");
    }
  };

  return (
    <div className={styles.container}>
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
        <Card flat className={styles.options} style={{ transform: lit ? "none" : "translateY(calc(50vh - 20px))" }} >
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
              id="intensityRange"
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
          <br />
          <div className={styles.colorDots} >
            {colors.map((c) => (
              <ColorButton
                key={c}
                size="medium"
                rounded
                onClick={() => reduce('setColor', c)}
                active={c === color}
                color={c}
              />
            ))}
          </div>
          <CardContent style={{ background: "none" }}>
            <HueSlider
              value={hue}
              onChange={(event) => {
                reduce("setHue", event.target.value);
              }}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

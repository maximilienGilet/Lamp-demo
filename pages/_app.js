import "ui-neumorphism/dist/index.css";
import '../styles/globals.css';
import Head from "next/head";

export default ({ Component, pageProps }) => (
  <>
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
    <Component {...pageProps} />
  </>
);
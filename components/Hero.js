import css from "./Hero.module.css";
// import css from "./Hero.no-custom-media.module.css";

export function Hero() {
  return (
    <section className={css['container']}>
      <h1>Hello, world!</h1>
    </section>
  );
}

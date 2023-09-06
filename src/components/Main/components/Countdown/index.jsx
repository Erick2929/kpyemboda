import { Component } from "react";
import styles from "./styles.module.css";
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    // Calcula la diferencia de tiempo entre la fecha actual y la fecha de la boda
    const fechaBoda = new Date("2023-10-28"); // Cambia esta fecha a la fecha de la boda
    const ahora = new Date();
    const tiempoRestante = fechaBoda - ahora;

    // Calcula los días, horas, minutos y segundos restantes
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
      (tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    this.setState({
      days: dias,
      hours: horas,
      minutes: minutos,
      seconds: segundos,
    });

    // Actualiza el contador cada segundo
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown = () => {
    const { days, hours, minutes, seconds } = this.state;

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(this.interval);
    } else {
      this.setState((prevState) => ({
        days:
          prevState.hours === 0 &&
          prevState.minutes === 0 &&
          prevState.seconds === 0
            ? prevState.days - 1
            : prevState.days,
        hours:
          prevState.minutes === 0 && prevState.seconds === 0
            ? 23
            : prevState.hours,
        minutes: prevState.seconds === 0 ? 59 : prevState.minutes,
        seconds: prevState.seconds === 0 ? 59 : prevState.seconds - 1,
      }));
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className={styles.container} id='cuando'>
        <h2>Octubre 28, 2023</h2>
        <div className={styles.countdownTimer}>
          <span>{days}</span> d<span>{hours}</span> h<span>{minutes}</span> m
          <span>{seconds}</span> s
        </div>
      </div>
    );
  }
}

export default Countdown;

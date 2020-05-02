import React from "react";

import Cards from "../../component/Covide-19/Cards/Cards";
import Chart from "../../component/Covide-19/Chart/Chart";
import CountryPicker from "../../component/Covide-19/CountryPicker/CountryPicker";

import { fetchData } from "../../../src/api";
import styles from "./Covide.module.css";

import image from "../../images/image.png";

class Covide extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default Covide;

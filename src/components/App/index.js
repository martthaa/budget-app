import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Wrapper, GlobalStyle } from "./styles";
import Home from "../Home";
import About from "../About";
import Statistics from "../Statistics";

import { open } from "../../utils/indexdb";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    open()
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        console.error("Помилка");
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <Wrapper>
          <GlobalStyle />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/statistics" element={<Statistics />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Wrapper>
      </Router>
    );
  }
}

export default App;

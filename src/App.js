import React, { Component } from 'react';
import './App.css';
import Statistics from "./Components/Statistics/Statistics"
import  FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions"
import Section from './Components/Section/Section'




class App extends Component  {
 state = {
    good: 0 ,
    neutral: 0,
    bad: 0,
  
  };


  countTotalFeedback = () => Object.values(this.state).reduce((total, value) => total + value, 0);
 
  countPositiveFeedbackPercentage = () => Math.round((this.state.good * 100) / this.countTotalFeedback());

  addFeedback = (evt) => {
    this.setState(prevState =>({ [evt]: prevState[evt] + 1 }));
    
  }

  render() {
    const total = this.countTotalFeedback();
    const countFeedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div className="container">
        <Section title="Please leave feedback">
          
          <FeedbackOptions
            value={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
      

        <Section title="Statistics">
           {total > 0 ? (
          <Statistics
            good = {good}
            neutral= {neutral}
            bad = {bad}
            total={total}
            countFeedback = {countFeedback}
          />) : 
            <div>No feedback given</div> 
          }
       </Section>
      </div>
    )
  }
}

export default App;

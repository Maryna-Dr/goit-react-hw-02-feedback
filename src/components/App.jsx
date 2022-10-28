import { Component } from "react";
import {Section, FeedbackOptions, Statistics, Notification} from 'components'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addGoodFeedback = (text) => {
    this.setState(prevState => ({
      [text]: prevState[text] + 1
    }))
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const totalCount = this.countTotalFeedback();
    const {good} = this.state;

    if(totalCount === 0) return 0;

    return Math.round((good / totalCount)*100);
  }

  render() {
    const btnList = Object.keys(this.state)
    const {good, neutral, bad} = this.state;
    const {addGoodFeedback, countTotalFeedback, countPositiveFeedbackPercentage} = this;
    
    return <Section title='Please, leave your feedback!'>
      <FeedbackOptions 
        options={btnList} 
        onLeaveFeedback={addGoodFeedback}
      />
      {good !== 0 || neutral !== 0 || bad !== 0 ? 
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      getCountTotal={countTotalFeedback} 
      getPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
    /> : <Notification message='There is no feedback now' />}
    </Section>;
  }
}

export default App;
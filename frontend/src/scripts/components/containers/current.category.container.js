import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getCurrentQuiz} from '../../api/user.api'
import {setQuizList} from '../../actions/quiz.actions'
import CurrentCategoryView from '../views/current.category.view'

class CurrentCategoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      category: ''
    };
  }

  componentDidMount() {
    getCurrentQuiz(localStorage.getItem('category')).then(result => {
      let quizList = [];
      result.forEach(item => {
        quizList.push(item.name);
      });
      this.props.setQuizList(quizList);
    });
  }

  render(){
    return (
      <CurrentCategoryView
        quizList={this.props.quizList.names}/>
    );
  }
}

CurrentCategoryContainer.propTypes = {
  quizList: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    quizList: state.quizState
  };
};

const mapDispatchToProps = (dispatch) => ({
  setQuizList: (names) => setQuizList(dispatch, names)
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCategoryContainer);
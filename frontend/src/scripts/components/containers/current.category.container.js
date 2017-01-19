import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getCurrentCategoryQuizes} from '../../api/user.api'
import {setQuizList} from '../../actions/quiz.actions'
import CurrentCategoryView from '../views/current.category.view'

class CurrentCategoryContainer extends Component {
  constructor() {
    super();
    this.getQuizName = this.getQuizName.bind(this);
    this.state = {
      category: ''
    };
  }

  componentDidMount() {
    getCurrentCategoryQuizes(localStorage.getItem('category')).then(result => {
      let quizList = [];
      result.forEach(item => {
        quizList.push(item.name);
      });
      this.props.setQuizList(quizList);
    });
  }

  getQuizName(event){
    localStorage.setItem('quizName', event.target.textContent);
  }

  render(){
    return (
      <CurrentCategoryView
        quizList={this.props.quizList.names}
        getQuizName={this.getQuizName}/>
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